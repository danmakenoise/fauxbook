Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api do
    resources :friendships, only: [:create, :update, :destroy]
    resources :posts, only: [:create, :index, :destroy] do
      resources :comments, only: [:create, :destroy]
    end
    resources :users, only: :create
    resources :comments do
      resources :comments, only: [:create, :destroy]
    end
    resource :session, only: [:create, :show, :destroy]
    resource :profile, only: [:show, :update] do
      patch '/photoupload', to: 'profiles#photo_upload'
      patch '/coverphotoupload', to: 'profiles#cover_photo_upload'
    end

    get '/feed', to: 'posts#feed'
    get '/requests', to: 'users#friend_requests'
    get '/search', to: 'searches#index'
    get '/users/:id/friends', to: 'users#friends'
  end

  # get '*path', to: redirect( '/' )
end
