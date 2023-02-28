# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    blue = FinishedProject.create(title: "Blueberries", description: "Hand embroidered pint of blueberries on a white sweatshirt", cover: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/3286a51c-67ec-4d56-ab65-a0604eefb6bb/blueberrys.jpg?format=1500w")
    dhouse = FinishedProject.create(title: "Daylight House", description: "Hand embroidered house on canvas. House, car, shrubbery, and some grass are hand embroidered. The background is acrylic", cover: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/2049156c-30b5-41a3-baff-e2c02156004f/IMG_7877.jpeg?format=1500w")
    limes = FinishedProject.create(title: "Limes", description: "Hand embroidered limes on canvas. Background is acrylic", cover: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/1677543659739-NI7ZZ3E3TO6Z7DZK3VWJ/IMG_7139.jpg?format=1500w")
    house = FinishedProject.create(title: "House", description: "Hand embroidered house on canvas. Background is acrylic", cover: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/1652207043992-1Z3BXH1S5KW3Q6E2TH9B/4D81C917-36B6-4977-A188-6562525EADEB.jpg?format=1500w")
    octopants = FinishedProject.create(title: "Octopus Pants", description: "Hand embroidered octopus on jeans", cover: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/1862748b-938c-4173-9cfd-64a1a9ed27cc/F9E84F73-BFCF-4A0B-9AC3-0FDF66919919.jpg?format=1500w")
    tomatopants = FinishedProject.create(title: "Tomato Pants", description: "Hand embroidered tomatos on canvas pants", cover: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/cc6a2875-9be8-4e24-88cf-964a33852721/IMG_2731.JPG?format=1000w")
    clementines = FinishedProject.create(title: "Clementines", description: "Hand embroidered clementines in bag on t-shirt", cover: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/9a347d71-1ab9-4367-a30b-ed399ef18fd1/IMG_6657.jpg?format=2500w")
    strawbs = FinishedProject.create(title: "Strawberries", description: "Hand embroidered strawberries on jeans", cover: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/bbd804f7-1440-47b9-9ad0-3331e7e3e948/IMG_4352.jpg?format=1500w")

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

    octoclose1 = Photo.create(title: "Octopus pants", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/e009b94a-fb5f-49a0-8211-9730b6b0f008/IMG_2660.jpg?format=1500w", alt: "Octopus pants", finished_project_id: octopants.id)

    tomatofar = Photo.create(title: "Tomato pants full leg", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/6aef5d96-788f-4999-b27b-8bfd8591be9c/IMG_2730.jpg?format=1000w", alt: "Tomatoe pants full leg", finished_project_id: tomatopants.id)
    tomato1 = Photo.create(title: "Tomato pants close up", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/d644cb34-884d-4ca6-becf-3437d71b2de0/IMG_2733.JPG?format=1000w", alt: "Tomato pants close up", finished_project_id: tomatopants.id)
   
    clemclose = Photo.create(title: "Clementine shirt close up", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/102e149a-26b9-4ff2-a65b-9fa75afadec0/IMG_6648.jpg?format=2500w", alt: "Clementine shirt close up", finished_project_id: clementines.id)

    strawbsfar = Photo.create(title: "Strawberry pants full leg", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/1677522613084-80YZM96M0D1E1WL4SB17/IMG_4321.jpg?format=1500w", alt: "Strawberry pants full leg", finished_project_id: strawbs.id)
    strawbsclose = Photo.create(title: "Strawberry pants close up", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/5b4f83f5-cd59-4260-ba99-089d4789dabe/IMG_4360.jpg?format=1500w", alt: "Strawberry pants close up", finished_project_id: strawbs.id)
    strawbsclose1 = Photo.create(title: "Strawberry pants close up pocket", image: "https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/c5780ebd-4b0e-48cb-8023-2fb6ff10bac6/IMG_4345.jpg?format=1500w", alt: "Strawberry pants close up pocket", finished_project_id: strawbs.id)

    colorskein = Softproj.create(title: "ColorSkein", description: "Capstone project which allows the user to create an account, input a photo URL and get the closest DMC thread colors to the colors in that image. The user can also adjust any of the thread colors by making them lighter or darker. Also includes an image, name, and number of all 506 DMC flosses and the ability to add them to your floss stash. I often find myself in the thread aisle of Michael's forgetting what I own and accidently re-buying the same colors!", cover: "https://camo.githubusercontent.com/474bde2bb55e9548cc586e7512a2eb743e5089ff3002413c32a0910a1bbb5432/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f49765a6f3359595a4431492f302e6a7067")
    nycCleans = Softproj.create(title: "NYC Cleans", description: "An app designed to help clean up NYC. Users can login, signup for volunteer activities, or create their own. They have the option of signing up with an organization, or volunteering as an individual. Each event is added to the map so that users can easily find them based on location, and added to the users profile once they've signed up.", cover: "https://user-images.githubusercontent.com/108838753/211165189-09c03276-20b4-4aad-a15f-f83b3d1e0155.gif")
    reminiscent = Softproj.create(title: "Reminiscent", description: "Reminiscent is a mock ecommerce scented candle company. The app allows users to log in and add candles to their cart. There are premade candles they can add, or the user can customize a candle, with their own name, label color, and scents.", cover: "https://user-images.githubusercontent.com/107277084/205724542-1975c237-223f-4910-8056-7bfa8309d1f5.gif")
    synodic = Softproj.create(title: "Synodic", description: "Synodic is a daily planning/wellness application that allows users to plan both morning and evening activities. The app includes a to-do list, weather pulled from a local weather API, and a randomly generated coffee or cocktail suggestion.", cover: "https://user-images.githubusercontent.com/107277084/205724512-cfbbbaa1-b28f-4aa0-9441-36763ee4b77a.gif")