Rails.application.routes.draw do
  root 'home#index'
  get  '/message' => 'home#message', as: :message
end
