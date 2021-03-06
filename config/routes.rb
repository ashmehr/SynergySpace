Rails.application.routes.draw do
  
  resources :posts  
  

  get 'users' => "users#index"
  get 'newpost' => 'posts#new'

  get 'login' => 'sessions#new'

  post 'login' => 'sessions#create'

  delete 'logout' => 'sessions#destroy'

  get 'signup' => 'users#new'

  root 'staticpages#home'

  get 'about' => 'staticpages#about'

  get 'contact' => 'staticpages#contact'

  get 'following' => 'users#following'
  
 resources :users
  resources :posts do
    member do
      get 'join'
      get 'leave'
      get "like", to: "posts#upvote"
      get "dislike", to: "posts#downvote"
    end
  end
  resources :users do
    member do
      get "follow", to: "users#follow"
      get "unfollow", to: "users#unfollow"
      get 'join', to: "users#join"
      get 'leave', to: "users#leave"
      get "like", to: "users#upvote"
      get "dislike", to: "users#downvote"
    end
  end

end
