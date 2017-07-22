class UsersController < ApplicationController
  def new
  end

  def create
    user = User.new(user_params)
    if user.save
      UserMailer.meme_email(user).deliver_now
      # format.html { redirect_to(@user, notice: 'User was successfully created.') }
      # format.json { render json: @user, status: :created, location: @user }
      session[:user_id] = user.id
      redirect_to '/memes'
    else
      redirect_to '/signup'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
