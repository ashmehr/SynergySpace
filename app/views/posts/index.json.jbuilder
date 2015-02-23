json.array!(@posts) do |post|
  json.extract! post, :id, :title, :address, :postedby, :description, :city, :country, :size
  json.url post_url(post, format: :json)
end
