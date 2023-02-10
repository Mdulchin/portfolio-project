# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
blue = FinishedProject.create(title: "Blueberries", description: "Hand embroidered pint of blueberries on a white sweatshirt", cover: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/3286a51c-67ec-4d56-ab65-a0604eefb6bb/blueberrys.jpg?format=1500w")
    dhouse = FinishedProject.create(title: "Daylight House", description: "Hand embroidered house on canvas. House, car, shrubbery, and some grass are hand embroidered. The background is acrylic", cover: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/1675284691706-TAJPZ6YQV9RAQ5E674TL/IMG_7893.jpg?format=1500w")

    blueclose1 = Photo.create(title: "Blueberries close up left", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/2c26d94f-6ad2-4919-9a6e-b41f42bfec10/IMG_5193.jpg?format=1500w", alt: "blueberries close up left side", finished_project_id: blue.id)
    blueclose2 = Photo.create(title: "Blueberries close up right", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/1652205660691-TWUZKO09J9LK4FUG47ZC/View%2Brecent%2Bphotos.jpg?format=1500w", alt: "blueberries close up right side", finished_project_id: blue.id)
    bluebig = Photo.create(title: "Blueberries on Sweatshirt", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/083302cd-c033-4b87-9991-deb40d072a4a/blueberrysweatshirt.jpg?format=1500w", alt: "blueberries on white sweatshirt", finished_project_id: blue.id)

    dhouseclose1 = Photo.create(title: "Daylight House close up left", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/1295a742-d3ca-4d79-89f8-3046e3ee09e6/IMG_78751-safeimagekit.jpeg?format=1500w", alt: "Daylight House close up left side", finished_project_id: dhouse.id)
    dhouseclose2 = Photo.create(title: "Daylight House close up right", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/7fc0a10f-c614-45a0-b482-ec689b65880d/IMG_78752-safeimagekit.jpeg?format=1500w", alt: "Daylight House close up right side", finished_project_id: dhouse.id)