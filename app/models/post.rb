class Post < ActiveRecord::Base
	belongs_to :user
	
	validates :title, presence: true
	validates :address, presence: true
	validates :postedby, presence: true
	validates :description, presence: true
	validates :city, presence: true
	validates :country, presence: true
	validates :size, presence: true
end
