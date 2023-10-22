import React, { useState } from "react";

export const Pictureshow = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "+10",
        background: "black",
        border: "solid 1px gray",
        width: "100%",
        display: "flex",
      }}
    >
      <div>
        <img
          style={{ width: "100%", zIndex: "+10", margin: "10%" }}
          alt="pictureshow"
          src={props.imageurl}
        />
      </div>
      <div
        style={{
          width: "30%",
          padding: "20%",
        }}
      >
        Name: {props.aname} <br />
        Artist: Zahra Pakdelnia <br />
        Description: {props.adescription}
        <div onClick={() => setvis(false)}>X</div>
      </div>
    </div>
  );
};
