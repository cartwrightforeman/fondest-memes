class Api::V1::StaticPagesController < ApplicationController
  def index
    render json: Meme.all, adapter: :json
  end

  def create
    data = JSON.parse(request.body.read)
    new_meme = Meme.create(url: data["url"])
    render json: new_meme
  end
end
