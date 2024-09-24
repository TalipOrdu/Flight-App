##Flight App
![ss1](https://github.com/user-attachments/assets/781ffc36-23bf-4852-a9c6-b25a1e455c38)
![ss2](https://github.com/user-attachments/assets/e4b1ac76-3e3c-473c-9035-1f15455986c0)

Flight Reservation System is a web application that allows customers to search and book their flights.
This application has a user-friendly program and provides up-to-date flight information using data from Schiphol Airport.

## Technologies 
**Frontend:** React, Tailwind CSS - 
**Backend:** Node.js, Express - 
**Database:** MongoDB - 
**API:** Schiphol Flight Information API

## Installation
To run the project locally, follow these steps:

### 1. Clone the Repository
git clone https://github.com/TalipOrdu/Flight-App.git
cd Flight-App
npm install

##Set Environmental Variables
You will need to set the necessary environmental variables for the backend application. Create the .env file and add the following information:

MONGODB_URI=your_mongodb_connection_string
API_KEY=your_schiphole_api_key
APP_ID=your_schiphole_api_id

##Run the Application
cd client
npm start
Open your browser and go to http://localhost:3000
