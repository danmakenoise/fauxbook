Rails.application.routes.draw do
  root to: "static_pages#root"

  get  '/login', to: 'sessions#new'
  delete '/logout', to: 'sessions#destroy'
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
end
