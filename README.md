# 🌍 **PLANEXA – AI-Based Trip Planner**

![React](https://img.shields.io/badge/React-18.0.0-blue?logo=react)  
![Vite](https://img.shields.io/badge/Vite-frontend-yellow?logo=vite)  
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwindcss)  
![Firebase](https://img.shields.io/badge/Firebase-Backend-orange?logo=firebase)  
![Google Auth](https://img.shields.io/badge/Google%20Auth-OAuth2-red?logo=google)  
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ **Overview**

**PLANEXA** is an innovative **AI-powered trip planner** that helps you design a personalized travel itinerary in seconds.  
Using **Gemini AI**, **Google Places API**, and **Firebase**, it recommends the best destinations, attractions, hotels, and restaurants — all tailored to your preferences, budget, and duration.

> 💡 *"Discover your next adventure — powered by AI."* ✈️  

---

## 🚀 **Features**

- 🔐 **Google Authentication** – Secure sign-in with Google OAuth 2.0  
- 🧠 **AI-Powered Trip Planning** – Generate smart, personalized itineraries with Gemini AI  
- 🏨 **Smart Recommendations** – Hotels, attractions & activities tailored to your trip style  
- 🗺️ **Google Places Autofill** – Real-time, accurate destination search  
- 💾 **Persistent Storage** – User data securely stored in Firebase Firestore  
- ⚡ **Modern Frontend** – Blazing-fast React + Vite setup  
- 💫 **Sleek UI & Animations** – Built using Tailwind CSS, shadcn UI, and Framer Motion  
- 🌐 **Clean API Integration** – Managed with Axios for seamless backend communication  

---

## 🧠 **Tech Stack**

| **Category**         | **Technology**                      |
|----------------------|-------------------------------------|
| Frontend             | React + Vite                        |
| Styling              | Tailwind CSS + shadcn/ui            |
| Animations           | Framer Motion                       |
| API Management       | Axios                               |
| Authentication       | Google OAuth                        |
| Database & Backend   | Firebase Firestore                  |
| AI Engine            | Google Gemini API                   |
| Hosting              | *(Coming Soon)*                     |

---

## ⚙️ **Installation & Setup**

Follow these steps to run **PLANEXA** locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Biko-KHM/planexa.git

# 2️⃣ Navigate into the project folder
cd planexa

# 3️⃣ Install dependencies
npm install
```

---

### 🔑 **Configure Environment Variables**

Create a `.env` file in the **root directory** and add your API keys:

```bash
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
```

> ⚠️ **Important:** Never push your `.env` file to GitHub.  
Add it to `.gitignore` to keep your credentials secure.

---

### 🧩 **Run the Development Server**

```bash
# 4️⃣ Start the Vite development server
npm run dev
```

Then visit the local server URL displayed in the terminal (usually `http://localhost:5173`) to preview your app.

---

## 📂 **Project Structure**

```
planexa/
├─ public/                     # Static assets (icons, manifest, etc.)
├─ src/
│  ├─ assets/                  # Images, icons, illustrations
│  ├─ components/              # Reusable UI components
│  ├─ constants/               # App-wide constants and configs
│  ├─ create-trip/             # Components/pages for trip creation
│  ├─ my-trips/                # Components/pages for saved trips
│  ├─ service/                 # API service logic (Axios requests)
│  ├─ view-trip/               # Components/pages for viewing trips
│  ├─ styles/                  # Tailwind CSS custom styles
│  ├─ utils/                   # Helper functions and utilities
│  ├─ firebase.js              # Firebase configuration setup
│  └─ main.jsx                 # App entry point
├─ package.json
└─ README.md
```

---

## 🧭 **How It Works**

1. **Sign in** with your Google account securely.  
2. **Enter trip details** — destination, number of travelers, days, and budget.  
3. **AI generates** a detailed, personalized travel plan using Gemini AI.  
4. **View or save** your trips to your Firebase account for easy access later.  

---

## 🧑‍💻 **Contributing**

 Contributions ❤️ are appreciated!  
If you’d like to improve **PLANEXA**, please follow these steps:

```bash
# 1. Fork the repository
# 2. Create a new branch
git checkout -b feature/YourFeatureName

# 3. Commit your changes
git commit -m "Add your feature"

# 4. Push to your fork
git push origin feature/YourFeatureName

# 5. Open a Pull Request
```

> 💬 Got suggestions? Feel free to open an issue or discussion!

---

## 🪪 **License**

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it with proper attribution.

---

## 🌟 **Acknowledgements**

Special thanks to the following technologies and APIs:

- 🧠 **Google Gemini AI** – for intelligent trip generation  
- 🗺️ **Google Places API** – for real-time location suggestions  
- 🔥 **Firebase** – for backend and data persistence  
- 🎨 **shadcn/ui & Tailwind CSS** – for sleek and responsive design  

---

## ✈️ **Discover Your Next Adventure**

> *“Discover your next adventure — powered by AI.”*  
> — *The PLANEXA Team* 💫  
