import React, { useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  useEffect(() => {
    starfall();
  }, []);

  function starfall() {
    const numStars = 100; // Adjust the number of stars

    const starsContainer = document.querySelector(".stars-container");

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.width = `10px`;
      star.style.height = `10px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 18 + 9}s`; // Slow down the animation
      star.style.animationDelay = `${Math.random() * 9}s`;
      star.style.backgroundColor = getRandomColor();
      starsContainer.appendChild(star);
    }
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div>
      <div className="header">
        <h1>Bienvenue à la galerie d'art de Zahra</h1>
      </div>
      <div className="container">
        <div className="artist-image-container">
          <div className="artist-image"></div>
        </div>
        <p
          style={{
            color: "#ffa600",
            fontFamily: "cursive",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {" "}
          Zahra Pakdelnia
        </p>
        Licence en sciences graphiques
        <div className="button-container">
          <div>
            <Link to="/about">
              <button>Aventure</button>
            </Link>
          </div>

          <div>
            <Link to="/paintings">
              <button>Peintures</button>
            </Link>
          </div>
          <div>
            <button
              onClick={() =>
                (window.location.href = "./graphics/graphics.html")
              }
            >
              Graphique
            </button>
          </div>
          <div>
            <button
              onClick={() => (window.location.href = "./digital/digital.html")}
            >
              Arts numériques
            </button>
          </div>
        </div>
      </div>
      <div className="stars-container"></div>
    </div>
  );
};

export default Home;
