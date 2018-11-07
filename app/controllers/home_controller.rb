class HomeController < ApplicationController
  def index
  end

  def message
    @message = Message.new(name: 'とくめいさん')
    @messages = Message.all.order(id: :desc).limit(1024)
  end

  def message_create
    message = Message.new(message_params)
    if message.save
      flash[:notice] = '送信しました'
    else
      flash[:alert] = 'エラーが発生しました'
    end
    redirect_to action: :message
  end

  private
  def message_params
    params.require(:message).permit(:name, :text)
  end
end
