json.extract! hackathon, :id, :title, :description, :image, :created_at, :updated_at
json.url hackathon_url(hackathon, format: :json)
json.image url_for(hackathon.image)
