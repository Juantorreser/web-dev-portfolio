import React from "react";

const TechSkill = ({name, rating}) => {
  const createRatingUi = () => {
    const ratingDivs = []; // Initialize an array to hold the JSX elements

    for (let i = 0; i < 10; i++) {
      if (i < rating) {
        ratingDivs.push(<div key={i} className="rating-div bg-pri" />);
      } else{
        ratingDivs.push(<div key={i} className="rating-div bg-white/95" />);
      }
    }

    return ratingDivs; // Return the array of JSX elements
  };

  return (
    <div className="flex w-full relative items-center border-b-2 border-white/20 mb-1 pb-1">
      <h1 className="text-base">{name}</h1>
      <div className="absolute right-0 flex gap-1">{createRatingUi()}</div>
    </div>
  );
};

export default TechSkill;
