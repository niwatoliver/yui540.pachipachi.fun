class HomeController < ApplicationController
  def index
  end

  def message
    @message = Message.new(name: 'とくめいさん')
    @messages = Message.all
  end

  def message_create
    Message.create(message_params)
  end

  private
  def message_params
    params.require(:message).permit(:name, :text)
  end
end
