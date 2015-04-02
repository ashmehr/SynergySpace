class User < ActiveRecord::Base

	acts_as_followable
	acts_as_follower
  ratyrate_rater

  belongs_to :teams


	attr_accessor :remember_token
	before_save {self.email = email.downcase}
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/
	validates :name, presence: true, length: {maximum: 50}
	
	validates :email, presence: true, length: {maximum: 255}, uniqueness: {case_sensitive: false}, format: {with: VALID_EMAIL_REGEX}
	has_secure_password 
	validates :password, length: {minimum: 6}

	def User.new_token
		SecureRandom.urlsafe_base64
	end

	def User.digest(string)
		cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST : BCrypt::Engine.cost
		BCrypt::Password.create(string, cost: cost)
	end

	def remember
		self.remember_token = User.new_token
		update_attribute(:remember_digest, User.digest(remember_token))
	end

	def forget
		update_attribute(:remember_digest, nil)
	end

	def authenticated?(remember_token)
		return false if remember_digest.nil?
		BCrypt::Password.new(remember_digest) == remember_token
	end
    def self.search(query)
    # where(:title, query) -> This would return an exact match of the query
      where("name like ?", "%#{query}%") 
  end
end
