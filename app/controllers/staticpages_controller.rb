class StaticpagesController < ApplicationController
  def home
  @posts = Post.all
  @hash = Gmaps4rails.build_markers(@posts) do |post, marker|
      marker.lat post.latitude
      marker.lng post.longitude
      marker.infowindow post.title
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
