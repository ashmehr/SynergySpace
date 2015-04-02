Rails.application.routes.draw do
  
  post '/rate' => 'rater#create', :as => 'rate'
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
    end
  end
  resources :users do
    member do
      get "follow", to: "users#follow"
      get "unfollow", to: "users#unfollow"
      get 'join', to: "users#join"
      get 'leave', to: "users#leave"
    end
  end

end
