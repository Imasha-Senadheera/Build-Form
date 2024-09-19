import React from "react";

const WelcomeScreen = ({ title, description }) => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default WelcomeScreen;
