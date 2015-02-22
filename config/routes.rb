Rails.application.routes.draw do
  
  get 'login' => 'sessions#new'

  post 'login' => 'sessions#create'

  delete 'logout' => 'sessions#destroy'

  get 'signup' => 'users#new'

  root 'staticpages#home'

  get 'about' => 'staticpages#about'

  get 'contact' => 'staticpages#contact'

  resources :users

end
