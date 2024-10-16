import React from "react";

const resumeCard = ({image, title, subtitle, children}) => {
  return (
    <div className=" bg-bg_sec rounded">
      {image && (
        <div>
          <img src={image} alt="Profile Image" />
          <h1>{title}</h1>
        </div>
      )}
      <h1>{title}</h1>
    </div>
  );
};

export default resumeCard;
