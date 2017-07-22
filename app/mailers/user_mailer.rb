class UserMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def meme_email(user)
    @user = user
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Your Fondest Meme <3')
  end
end
