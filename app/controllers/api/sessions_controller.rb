class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in(@user)
      render '/api/users/show'
    else
      render json: ["Invalid username/password"], status: 401
    end
  end

  def destroy
    @user = User.find_by(session_token: session[:session_token])
    if @user
      log_out
      render '/api/users/show'
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

end
