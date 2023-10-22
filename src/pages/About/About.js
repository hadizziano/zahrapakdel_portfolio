import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div>
      {" "}
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/paintings"> Paintings</Link>
        </li>
        <li>
          <Link to="/digitalarts"> Digital Arts</Link>
        </li>
      </ul>
      <div className="maincontainer">
        <div className="textcontainer">
          <div>
            Je m'appelle Zahra Pakdel Nia. Je suis né en Iran en 1992 dans la
            ville de Dezful. J'adore le dessin et le graphisme depuis que je
            suis enfant. Au lycée, j'ai commencé à peindre sous la supervision
            de mon cher professeur, M. Kalani. Après le lycée, j'ai poursuivi
            mes études au département de graphisme de l'université de Chamran et
            j'ai obtenu mon baccalauréat dans ce domaine. Puis pendant plusieurs
            années j'ai exercé des activités et travaillé dans différents
            domaines des arts visuels et maintenant je suis venue en France, ce
            beau pays qui est le berceau de l'art, pour développer mes activités
            artistiques.
          </div>
        </div>
        {/* <img
          className="backimage"
          src="./generalimages/eifel.jpg"
          width="100%"
        />
        <img
          className="backimagemobile"
          src="./generalimages/eifelmobile.jpg"
          width="100%"
        /> */}
      </div>
    </div>
  );
};
export default About;
