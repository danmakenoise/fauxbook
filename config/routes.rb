Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api do
    resource :session, only: [:create, :show, :destroy]
    resource :profile, only: [:show, :update] do
      patch '/photoupload', to: 'profiles#photo_upload'
      patch '/coverphotoupload', to: 'profiles#cover_photo_upload'
    end
  end

  get    '/login', to: 'sessions#new'
  delete '/logout', to: 'sessions#destroy'
  post   '/login', to: 'sessions#create'
  post   '/signup', to: 'users#create'
end
