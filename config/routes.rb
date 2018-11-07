Rails.application.routes.draw do
  root 'home#index'
  get  '/message' => 'home#message', as: :message
  post '/message' => 'home#message_create', as: :message_create

  get  '*path'    => redirect('/message')
end
