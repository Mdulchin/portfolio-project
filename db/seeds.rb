# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    blue = FinishedProject.create(title: "Blueberries", description: "Hand embroidered pint of blueberries on a white sweatshirt", cover: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/3286a51c-67ec-4d56-ab65-a0604eefb6bb/blueberrys.jpg?format=1500w")
    dhouse = FinishedProject.create(title: "Daylight House", description: "Hand embroidered house on canvas. House, car, shrubbery, and some grass are hand embroidered. The background is acrylic", cover: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/2049156c-30b5-41a3-baff-e2c02156004f/IMG_7877.jpeg?format=1500w")
    limes = FinishedProject.create(title: "Limes", description: "Hand embroidered limes on canvas. Background is acrylic", cover: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/1657741754313-Y8GDN9EQKB46S2DH6UK7/IMG_7139.jpg?format=1500w")
    house = FinishedProject.create(title: "House", description: "Hand embroidered house on canvas. Background is acrylic", cover: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/1652207043992-1Z3BXH1S5KW3Q6E2TH9B/4D81C917-36B6-4977-A188-6562525EADEB.jpg?format=1500w")

    blueclose1 = Photo.create(title: "Blueberries close up left", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/2c26d94f-6ad2-4919-9a6e-b41f42bfec10/IMG_5193.jpg?format=1500w", alt: "blueberries close up left side", finished_project_id: blue.id)
    blueclose2 = Photo.create(title: "Blueberries close up right", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/1652205660691-TWUZKO09J9LK4FUG47ZC/View%2Brecent%2Bphotos.jpg?format=1500w", alt: "blueberries close up right side", finished_project_id: blue.id)
    bluebig = Photo.create(title: "Blueberries on Sweatshirt", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/083302cd-c033-4b87-9991-deb40d072a4a/blueberrysweatshirt.jpg?format=1500w", alt: "blueberries on white sweatshirt", finished_project_id: blue.id)

    dhouseclose1 = Photo.create(title: "Daylight House close up left", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/1295a742-d3ca-4d79-89f8-3046e3ee09e6/IMG_78751-safeimagekit.jpeg?format=1500w", alt: "Daylight House close up left side", finished_project_id: dhouse.id)
    dhouseclose2 = Photo.create(title: "Daylight House close up right", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/7fc0a10f-c614-45a0-b482-ec689b65880d/IMG_78752-safeimagekit.jpeg?format=1500w", alt: "Daylight House close up right side", finished_project_id: dhouse.id)

    limesclose1 = Photo.create(title: "Lime Bag Close up", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/f5d76552-d315-44e1-982e-175025f5400e/IMG_7108.jpg?format=1500w", alt: "Limebag close up", finished_project_id: limes.id)
    limesclose2 = Photo.create(title: "Falling Lime Close up", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/80d85481-aea4-4ad7-b8ae-57c7ab207b70/IMG_7107.jpg?format=1500w", alt: "Falling Lime close up", finished_project_id: limes.id)
    limesclose3 = Photo.create(title: "Lime on Ground Close up", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/17d929bb-a878-4648-a86c-bd5824593700/IMG_7106.jpg?format=1500w", alt: "Lime on Groundclose up", finished_project_id: limes.id)

    houseclose1 = Photo.create(title: "House close up left", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/1457b8bf-2227-483d-a7ba-1e0a865e5a06/AB0A50D0-9B9F-46EA-9586-CC6308D7F1EC.JPG?format=1500w", alt: "House close up left side", finished_project_id: house.id)
    houseclose2 = Photo.create(title: "House close up right", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/fb77db36-d084-4b6b-af26-5b984389a161/DE518AE4-4E75-4FFD-B0D5-41F7EE4F94F1.JPG?format=1500w", alt: "House close up right side", finished_project_id: house.id)



    colorskein = Softproj.create(title: "ColorSkein", description: "Capstone project which allows the user to create an account, input a photo URL and get the closest DMC thread colors to the colors in that image. The user can also adjust any of the thread colors by making them lighter or darker. Also includes an image, name, and number of all 506 DMC flosses and the ability to add them to your floss stash. I often find myself in the thread aisle of Michael's forgetting what I own and accidently re-buying the same colors over and over!", cover: "https://colorskein.onrender.com/static/media/finalblueberrys.738c32e3.png")