Rails.application.routes.draw do
  root 'static_pages#index'
  get '/memes', to: 'static_pages#index'
  # resources :memes
  # these routes are for showing users a login form, logging them in, and logging them out.
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  # These routes will be for signup. The first renders a form in the browse, the second will
  # receive the form and create a user in our database using the data given to us by the user.
  get '/signup' => 'users#new'
  post '/users' => 'users#create'


end

#   GifVault::Application.routes.draw do
    # # This route sends requests` to our naked url to the *cool* action in the *gif* controller.
    # root to: 'gif#cool'
    #
    # # I've created a gif controller so I have a page I can secure later.
    # # This is optional (as is the root to: above).
    # get '/cool' => 'gif#cool'
    # get '/sweet' => 'gif#sweet'`
#
#     # these routes are for showing users a login form, logging them in, and logging them out.
#     get '/login' => 'sessions#new'
#     post '/login' => 'sessions#create'
#     get '/logout' => 'sessions#destroy'
#
#     get '/signup' => 'users#new'
#     post '/users' => 'users#create'
#
#   end
#
