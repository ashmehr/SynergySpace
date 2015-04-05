class UsersController < ApplicationController
  
  def new
  	@user = User.new
  end
def index
    if params[:search]
      @users = User.search(params[:search]).order("created_at DESC")
    else
      @users = User.order("created_at DESC")
    end
  end
  def show
  	@user = User.find(params[:id])
  end

  def create
  	@user = User.new(user_params)
  	if @user.save
  		log_in @user
  		flash[:success] = "Welcome to SynergySpace"
  		redirect_to @user
  	else 
  		render 'new'
  	end
  end


  
  
  def follow

    @user = User.find(params[:id])

    if current_user == @user
      flash[:error] = "You cannot follow yourself."
    else
      current_user.follow(@user)
      flash[:notice] = "You are now following #{@user.name}"
    end

    redirect_to :back
  end

  def unfollow
    @user = User.find(params[:id])

    if current_user
      current_user.stop_following(@user)
      flash[:notice] = "You are no longer following #{@user.name}."
    end

    redirect_to :back
  end

  def upvote
    @user = User.find(params[:id])
    if current_user.liked? @user
      @user.unvote_by current_user
    else
      @user.upvote_by current_user
    end
    redirect_to @user
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
		def user_params
			params.require(:user).permit(:name, :email, :password, :password_confirmation)
		end

end
