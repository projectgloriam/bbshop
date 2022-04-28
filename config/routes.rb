Rails.application.routes.draw do
  root to: 'welcome#index'
  get 'welcome/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :basses, only: [:index, :create, :destroy, :update]
    end
  end
end
