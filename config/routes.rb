Rails.application.routes.draw do
  
  get 'signup' => 'users#new'

  root 'staticpages#home'

  get 'about' => 'staticpages#about'

  get 'contact' => 'staticpages#contact'

  resources :users

end
