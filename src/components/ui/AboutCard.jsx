import React from 'react'

const AboutCard = () => {
  return (
    <div className="w-[350px] bg-bg rounded-md shadow-lg">
      <div className="w-full bg-pri rounded-t-md py-2 px-5 flex gap-2">
        <div className="bg-bg_sec rounded-full w-[10px] h-[10px]"></div>
        <div className="bg-bg_sec rounded-full w-[10px] h-[10px]"></div>
        <div className="bg-bg_sec rounded-full w-[10px] h-[10px]"></div>
      </div>
      <div className="w-full bg-bg rounded-b-md flex flex-col items-center p-6">
        <img src="/profilePic.jpeg" alt="profilePic" className="w-full rounded-lg" />
        <p className="mt-3 font-bold text-xl k2d">Juan Torres</p>
        <p className="font-base text-white/50  text-sm k2d">Web Developer</p>
      </div>
    </div>
  );
}

export default AboutCard