This project is a movie discovery application built using modern web technologies to provide users with a clean, fast way to find movies and see what's currently trending based on user searches.

---

## ✨ Features

* **Movie Search:** Instantly search for movies using a debounced input for smooth, performant results.
* **Trending Searches:** Tracks and displays the most popular search terms across all users using Appwrite to help users discover popular movies quickly.
* **Detailed Movie Cards:** Displays key information for each movie result, including posters and titles.
* **Initial Discovery:** Loads popular movies by default when no search term is entered.

---

## 💻 Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | **React** | The main JavaScript library for building the user interface. |
| **Styling** | **Tailwind CSS** | Used for rapid, utility-first styling. |
| **Data Source** | **The Movie Database (TMDB)** | Provides comprehensive movie data via its REST API. |
| **Backend/DB** | **Appwrite** | Used for database persistence to track, count, and retrieve trending user search terms. |
| **Utilities** | **Vite** | The fast build tool and development server. |
| **Utilities** | **`react-use` (useDebounce)** | Optimizes search performance by delaying API calls until the user stops typing. |

---

## 🚀 Deployment

The application is deployed using **GitHub Pages** for hosting, with automated deployment handled via the **`gh-pages`** NPM package.

This application has been build following a tutorial by JSmastery (https://jsmastery.com/). Some of the code in the tutorial is outdated and I had to work around it. This has actually taught me some good troubleshooting skills.
