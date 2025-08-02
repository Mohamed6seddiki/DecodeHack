
# Ecomeal

A collaborative platform built for discovering and sharing sustainable food solutions. Developed during a hackathon to reduce food waste and promote eco-friendly consumption through community engagement.

## 🌍 Features

- User Authentication (Sign up / Login)
- Welcome and Home Pages
- Explore Section to discover food-saving ideas
- Interactive Card Interface to showcase user submissions
- Form for submitting new posts (with image, location, and description)
- Responsive UI using **Bootstrap**
- Backend API with **Express.js**
- Data rendering from server to front-end dynamically

## 🚀 Tech Stack

**Frontend:**
- HTML5
- CSS3 / Bootstrap 5
- JavaScript (Vanilla)

**Backend:**
- Node.js
- Express.js

**Hosting:**
- [Render](https://render.com/) *(for backend deployment)*

## 📂 Project Structure

```
DecodeHack/
│
├── public/                 # Static frontend files
│   ├── index.html          # Main HTML pages (Login, Home, SignUp)
│   └── style.css           # Custom styles
│
├── server/                 # Express backend
│   ├── index.js            # Server routes and endpoints
│   └── data.json           # Data file for storing cards (can be replaced with DB)
│
├── .gitignore
├── package.json
└── README.md
```

## 🛠️ Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mohamed6seddiki/DecodeHack.git
   cd DecodeHack
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the server:**

   ```bash
   node index.js
   ```

4. **Open the site:**

   Open `public/index.html` in your browser.

## 💡 Future Improvements

- Add a real database (MongoDB or PostgreSQL)
- Integrate image upload instead of using local paths
- Implement authentication with JWT or OAuth
- Add like/comments system
- Mobile-first design refinements

## 🧠 Team

Built with ❤️ by Mohamed Seddiki and team during a hackathon.

## 📜 License

This project is open-source and free to use for educational or non-commercial purposes.
