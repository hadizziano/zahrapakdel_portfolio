import React, { useState } from "react";
import "./paintings.css";
import Profilepic from "../Home/zahra.jpg";
import { paintingList } from "./list";
import { Link } from "react-router-dom";
export const Paintings = () => {
  const [imageurl, setimageurl] = useState("./pictures/chris.jpg");
  const [imagevis, setimagevis] = useState(false);
  const [aName, setaName] = useState();
  const [description, setDescription] = useState();

  const Pictureshow = () => {
    return (
      <div
        style={{
          position: "absolute",
          zIndex: "+10",
          background: "black",
          width: "100%",
        }}
      >
        <div
          style={{
            padding: "1%",
          }}
        >
          <div
            style={{ position: "fixed", cursor: "pointer" }}
            onClick={() => setimagevis(false)}
          >
            <img width="30px" alt="closeicon" src="./icons/closeicon.png" />
          </div>
          <div style={{ margin: "10px", marginTop: "60px" }}>
            {" "}
            Name: {aName}{" "}
          </div>
          <div style={{ margin: "10px" }}> Artist: Zahra Pakdelnia </div>
          <div style={{ margin: "10px" }}>Description: {description}</div>
        </div>
        <div>
          <img className="singlepic" alt="pictureshow" src={imageurl} />
        </div>
      </div>
    );
  };

  return (
    <div>
      {imagevis ? <Pictureshow imageurl={imageurl} /> : null}
      <header className="header">
        <img src={Profilepic} alt="Artist Picture" />
        <div className="artist-info">
          <h1>Zahra Pakdelnia</h1>
          <p>Paintings with different techniques</p>
        </div>
      </header>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Paintings</a>
        </li>
        <li>
          <a href="#">Graphics</a>
        </li>
        <li>
          <a href="#">Digital Art</a>
        </li>
      </ul>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {!imagevis
          ? paintingList.map((item) => {
              return (
                <div className="artwork" id={item.Aname}>
                  <img
                    src={item.url}
                    alt={item.Aname}
                    onClick={() => {
                      setimageurl(item.url);
                      setimagevis(true);
                      setaName(item.Aname);
                      setDescription(item.description);
                    }}
                  />
                  <span class="artwork-name">
                    <b style={{ color: "rgb(255, 178, 23)", fontSize: "14px" }}>
                      Name: &nbsp;
                    </b>
                    {item.Aname}
                    <br />
                    <b style={{ color: "rgb(255, 178, 23)", fontSize: "14px" }}>
                      Technique:&nbsp;{" "}
                    </b>
                    {item.Technique} <br />
                    <b style={{ color: "rgb(255, 178, 23)", fontSize: "14px" }}>
                      Artist:&nbsp;{" "}
                    </b>
                    Zahra Padkelnia
                    <br />
                    <b style={{ color: "rgb(255, 178, 23)", fontSize: "14px" }}>
                      Description:&nbsp;
                    </b>
                    {item.description}
                  </span>
                </div>
              );
            })
          : null}{" "}
      </div>
      <div class="portfolio"></div>
    </div>
  );
};
export default Paintings;
