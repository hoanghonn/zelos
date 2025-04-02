# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


hackathon_1 = Hackathon.create(title: 'Global AI Hackathon',
    description: %(<p>Join us for the Global AI Hackathon, where innovators and developers from around the world come together
        to create cutting-edge AI solutions. This event is a unique opportunity to collaborate with like-minded
        individuals, learn from industry experts, and showcase your skills in a competitive environment.</p>)
    )

hackathon_1.image.attach(io: File.open(Rails.root.join('db', 'images', 'h1.png')), filename: 'h1.png')

hackathon_1.save!
