class MemesController < ApplicationController
  before_filter :authorize

  def index
    @memes = Meme.all
  end
end
