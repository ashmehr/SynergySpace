class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    if params[:search]
      @posts = Post.search(params[:search]).order("created_at DESC")
    else
      @posts = Post.order("created_at DESC")
    end
  end

def join
  if logged_in?
    @post= Post.find params[:id]
    current_user.update_attribute(:post_id, @post.id)
    redirect_to @post
  else 
    redirect_to root_path
  end
end
  
def leave
  @post= Post.find params[:id]
  current_user.update_attribute(:post_id, nil)
  redirect_to @post
end
  # GET /posts/1
  # GET /posts/1.json
  def show
  end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params)
    current_user.update_attribute(:post_id, @post.id)
    @post.madeby = current_user.id
    @post.postedby = current_user
          location = Geocoder.search(@post.address + ',' + @post.city + ',' + @post.country)
    @post.latitude = location[0].latitude
    @post.longitude = location[0].longitude  
   
    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Post was successfully created.' }
        format.json { render :show, status: :created, location: @post }

        
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end

  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
        location = Geocoder.search(@post.address + ',' + @post.city + ',' + @post.country)
    @post.latitude = location[0].latitude
    @post.longitude = location[0].longitude
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }

      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def upvote
    @post = Post.find(params[:id])
    if current_user.liked? @post
      @post.unvote_by current_user
    else
      @post.upvote_by current_user
    end
    redirect_to @post
  end

  def downvote
    @post = Post.find(params[:id])
    if current_user.disliked? @post
      @post.unvote_by current_user
    else
      @post.downvote_by current_user
    end
    redirect_to @post
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :address, :postedby, :description, :city, :country, :size)
    end
end
