# Hotel Software Management System

This software provides a comprehensive solution for managing hotel information, handling user reservations, checking room availability, and facilitating communication between users and the hotel. Additionally, it offers full CRUD functionality for administrative tasks.

## Deploy on Netlify
* [**Hotel Goncal**](https://hotel-goncal.netlify.app/)

> [!TIP]
> If you want to test the admin functionality of this project, email me to goncalhurtado@gmail.com, and I'll promptly send you a test user. Then you can used it at /login.

> [!IMPORTANT]  
> The first request takes a bit longer as the backend is on a free plan with Render. Please, have patience! 😄.

## Features

### Admin Features

1. **CRUD Operations:**
   - On the home page, we have a dashboard-style summary with updates on contact requests, new reservations, and current hotel guests.
 ![Home Admin](https://res.cloudinary.com/dr2iqnauy/image/upload/v1705009913/hotel-software/github/homeadmin_v5vq9j.png)

2. **Contact Management:**
   - Admins can respond to user inquiries directly through the website and send emails without leaving the platform.
  ![contact Admin](https://res.cloudinary.com/dr2iqnauy/image/upload/v1705010033/hotel-software/github/contact1_bqbarh.png)
  ![contact2 Admin](https://res.cloudinary.com/dr2iqnauy/image/upload/v1705010078/hotel-software/github/contact2_fg49yh.png)

3. **Room Management:**
   - Admins can create new rooms, update existing ones, and delete rooms as needed.
![room Admin](https://res.cloudinary.com/dr2iqnauy/image/upload/v1705010223/hotel-software/github/rooms_zmajsz.png)

4. **Category Management:**
   - Create, update, and delete room categories to better organize the hotel's offerings.
  ![category Admin](https://res.cloudinary.com/dr2iqnauy/image/upload/v1705010165/hotel-software/github/categories_vidpyf.png)

5. **Reservation Management:**
   - View and manage user reservations, making it easy to handle bookings efficiently.
   ![booking Admin](https://res.cloudinary.com/dr2iqnauy/image/upload/v1705010310/hotel-software/github/booking_admi_kizh6h.png)

### User Features
1. **Hotel Information:**
   - View detailed information about the hotel, including its location, services, and policies.

2. **Reservation System:**
   - Users can easily make reservations directly through the website by filling out the necessary details.

3. **Room Availability:**
   - Check the availability of rooms for specific dates through a user-friendly interface.

4. **Contact Hotel:**
   - Users can contact the hotel using a built-in form, making communication seamless.



## Technology Stack
- Frontend: React, MaterialUi, Css 
- Backend: [**Backend Github repository**](https://github.com/goncalhurtado/hotel-software-backend)
- Database: MongoDB

## Installation

## Run
`npm run dev`
Initiates the application in development mode. Visit http://localhost:5173 in your browser to view the real-time application. The page will automatically refresh upon changes in the source code. Any style errors will also be displayed in the console.

`npm run build`
Builds the application for production in the build folder. This action optimizes the build for better performance by minimizing files. Once completed, your application will be ready for deployment in production.

`npm run lint`
Runs ESLint to search and display style errors in your JavaScript and JSX files. This command uses the configuration defined in your project and provides an error report without allowing warnings in your code (--max-warnings 0).

`npm run preview`
Initiates a preview of the application using Vite. This functionality enables you to visualize your application in a development environment and conduct testing.

## Autor
Goncal Hurtado [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://goncalhurtado.netlify.app/) [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/goncalhurtado/)

