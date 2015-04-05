class Post < ActiveRecord::Base
  acts_as_votable
  belongs_to :user
  has_many :users


	validates :title, presence: true
	validates :address, presence: true
	validates :postedby, presence: true
	validates :description, presence: true
	validates :city, presence: true
	validates :country, presence: true
	validates :size, presence: true
  
    def self.search(query)
    # where(:title, query) -> This would return an exact match of the query
    where("title like ?", "%#{query}%") 
  end
end
