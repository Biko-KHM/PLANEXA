# 🌍 PLANEXA – AI-Based Trip Planner

![React](https://img.shields.io/badge/React-18.0.0-blue?logo=react)  
![Vite](https://img.shields.io/badge/Vite-frontend-yellow?logo=vite)  
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwindcss)  
![Firebase](https://img.shields.io/badge/Firebase-Backend-orange?logo=firebase)  
![Google Auth](https://img.shields.io/badge/Google%20Auth-OAuth2-red?logo=google)  
![License](https://img.shields.io/badge/license-MIT-green)  

---

## ✨ Overview

**Planexa** is an intelligent **AI-powered trip planner** that helps users design personalized travel itineraries in seconds.  
Leveraging **Gemini AI**, **Google Places API**, and **Firebase**, Planexa recommends destinations, hotels, and attractions tailored to your preferences and budget — all in a sleek, modern interface.

---

## 🚀 Features

- 🔐 **Google Authentication** — Secure sign-in using Google OAuth.  
- 🗺️ **AI Trip Planning** — Generates personalized travel itineraries using Gemini AI.  
- 🏨 **Smart Recommendations** — Suggests hotels, attractions, and activities based on budget and trip duration.  
- 🧭 **Google Place Autofill** — Provides real-time location suggestions for easy destination search.  
- 💾 **Persistent Storage** — Saves user preferences and history securely in Firebase.  
- ⚡ **Fast Frontend** — Built with **React**, **Vite**, and **Tailwind CSS** with **shadcn UI**.  
- 🎞️ **Smooth Animations** — Enhanced user experience with **Framer Motion**.  
- 🌐 **API Integration** — Managed efficiently using **Axios**.  

---

## 🧠 Tech Stack

| Category       | Technology                          |
|----------------|-------------------------------------|
| Frontend       | React + Vite                        |
| Styling        | Tailwind CSS + shadcn/ui            |
| Animations     | Framer Motion                       |
| State & API    | Axios                               |
| Authentication | Google OAuth                        |
| Backend / DB   | Firebase Firestore                  |
| AI Engine      | Google Gemini API                   |
| Hosting        | ...cooming soon                     |

---

## ⚙️ Installation & Setup

Follow these steps to run Planexa locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Biko-KHM/planexa.git

# 2️⃣ Navigate into the project folder
cd planexa

# 3️⃣ Install dependencies
npm install
🔑 Configure Environment Variables
Create a .env file in the root directory:


# Google Places API
VITE_GOOGLE_PLACE_API_KEY=your_google_place_api_key

# Gemini AI API
VITE_GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key

# Google OAuth Client ID
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_api_key

# Firebase configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
Important: Do not push your .env file to GitHub. Add it to .gitignore to keep your keys safe.

4️⃣ Run the development server
npm run dev
Visit the port Vite shows- to see the app in action.

📂 Project Structure
planexa/
├─ public/ # Static assets
├─ src/
│ ├─ assets/ # Images, icons, and other static files
│ ├─ components/ # Reusable React components
│ ├─ constants/ # App-wide constants
│ ├─ create-trip/ # Components/pages related to creating a trip
│ ├─ my-trips/ # Components/pages for saved trips
│ ├─ service/ # API service calls
│ ├─ view-trip/ # Components/pages for viewing a trip
│ ├─ styles/ # Tailwind custom styles
│ ├─ utils/ # Helper functions, API calls
│ ├─ firebase.js # Firebase configuration
│ └─ main.jsx # Entry point
├─ package.json
└─ README.md
Sign in with your Google account.

Enter destination, number of days, travelers, and budget.

Receive an AI-generated travel plan instantly.

Save trips to your Firebase account for future reference.

🪪 License
This project is licensed under the MIT License. You are free to use, modify, and distribute it.

🌟 Contributing
Contributions, suggestions, and improvements are welcome!
Please follow these steps:

Fork the repository.

Create a new branch: git checkout -b feature/YourFeatureName.

Commit your changes: git commit -m "Add your feature".

Push to your branch: git push origin feature/YourFeatureName.

Open a pull request.

“Discover your next adventure — powered by AI. ✈️”
— Planexa Team

---