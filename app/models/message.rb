class Message < ApplicationRecord
  validates :name, presence: true
  validates :text, presence: true

  validates :name, length: { maximum: 64 }
  validates :text, length: { maximum: 1024 }
end
