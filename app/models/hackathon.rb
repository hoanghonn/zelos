class Hackathon < ApplicationRecord
  has_one_attached :image
  after_commit -> { broadcast_refresh_later_to "hackathons" }

  # validates :title, presense: true
end
