import React from 'react'

const ResCard = ({image, name, title, children}) => {
  return (
    <div className=" bg-bg_sec rounded py-8 px-6 resumeCard flex-grow">
      {image && name && (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={image} alt="Profile Image" width={180} className="rounded mb-3" />
          <h1 className="k2d text-2xl lg:text-3xl font-bold mb-3">{name}</h1>
        </div>
      )}
      <div className="title">
        <h1>{title}</h1>
        <div className="line"></div>
      </div>

      {children}
    </div>
  );
};


export default ResCard