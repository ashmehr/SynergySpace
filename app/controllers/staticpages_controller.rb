class StaticpagesController < ApplicationController
     def gmaps4rails_infowindow
       #@post = Post.search(params[:title]) 
       #@post.madeby
       infowindow
    end 
  
  
  
  def home
  @posts = Post.all
  @hash = Gmaps4rails.build_markers(@posts) do |post, marker|
      marker.lat post.latitude
      marker.lng post.longitude
    marker.infowindow "<p>#{post.title}</p>  <a href='#{join_post_path(post)}'>Join</a> <br/> <a href='posts/#{post.id}'>Show</a>"
      marker.picture({
        "url" => "https://addons.cdn.mozilla.net/img/uploads/addon_icons/13/13028-64.png",
        "width" => 32,
        "height" => 32
        })
    end
  end

  def about
  end

  def contact
  end
end
