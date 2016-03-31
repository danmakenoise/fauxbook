Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api do
    resources :posts, only: [:create, :index]
    resources :users, only: :create
    resource :session, only: [:create, :show, :destroy]
    resource :profile, only: [:show, :update] do
      patch '/photoupload', to: 'profiles#photo_upload'
      patch '/coverphotoupload', to: 'profiles#cover_photo_upload'
    end
  end

  # get '*path', to: redirect( '/' )
end
