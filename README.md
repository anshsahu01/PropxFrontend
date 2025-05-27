# 🏡 PopX Frontend

**Propx Frontend** is a modern, responsive, and scalable front-end application . Built with the latest frontend technologies like **React**, **Vite**, **Redux**,**Appwrite**, **React Router**, and **Tailwind CSS**, this project handles user authentication, profile management, and navigation across core app pages.

### Hosted on Vercel--
--- Host name or Live Link--https://popx-frontend-wine.vercel.app/

## 🚀 Tech Stack

- ⚛️ **React** – Component-based UI development
- ⚡ **Vite** – Lightning-fast build tool
- 🎯 **Appwrite** – Backend-as-a-Service (Auth, DB, Storage) 
- 📦 **Redux** – Global state management
- 🔀 **React Router** – Client-side routing
- 🎨 **Tailwind CSS** – Utility-first styling framework

## 🛠️ Getting Started- How to run the project

### 1. Clone the Repository
-- git clone https://github.com/anshsahu01/PropxFrontend
cd propx-frontend

### 2. Install Dependencies
-- npm install

### 3.Set Up Environment Variables
-- Create a .env file in the root directory and add your Appwrite credentials

### 4. Run the Development Server
-- npm run dev



  📄 Pages

| Page Name     | Path           | Description                              |
|---------------|----------------|------------------------------------------|
| **Sign Up**   | `/signin`      | New users can register                    |
| **Login**     | `/login`       | Existing users can log in                 |
| **Logout**    | `/logout`      | Securely logs users out                  |
| **Home**      | `/`            | Landing page with general info or feed   |
| **Profile**   | `/profile`     | Displays user-specific info and settings |


## 🔑 Core Functionalities

- ✅ **User Registration (Sign Up)**
- 🔐 **User Login and Authentication**
- 🚪 **Logout functionality**
- 👤 **View and Manage User Profile**
- 📂 **Protected Routes via Authentication**
- 📱 **Responsive UI** with consistent mobile-first design
- ♻️ **Reusable Components** (e.g., Button, Input, etc.)

  ✅ Folder Structure

  PopX-frontend/
├── components/                  # Reusable UI components
│   ├── SignIn.jsx
│   ├── Login.jsx
│   ├── Button.jsx
│   └── Input.jsx

├── pages/                       # Route-level pages
│   ├── SignInpage.jsx
│   ├── LogoutPage.jsx
│   ├── ProfilePage.jsx
│   ├── Loginpage.jsx
│   └── HomePage.jsx

├── store/                       # Redux setup
│   ├── AuthSlice.js            # Authentication slice
│   └── Store.js                 # Redux store configuration

├── config/                      # Environment and app-level config
│   └── conf.js                  # Handles environment variables (like Appwrite keys)

├── Appwrite/                    #Appwrite setup and methods
│   Auth.js                      # Authentication and account creation methods
│   Services.js                  # Profile creation and fetching profile details

├── App.jsx                      # Main App component with routing
├── main.jsx                     # React entry point
├── index.css                    # Tailwind base styles
├── .env                         # Environment variables (API keys, etc.)
├──example.env                   #Enviroment variables
└── README.md                    # Project documentation

