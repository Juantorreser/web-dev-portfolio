import React from "react";
import {ResumeInfo} from "../constants/constants";
import TechSkill from "./ui/TechSkill";
import ResCard from "./ui/ResCard.jsx";

const Resume = () => {
  const {profile, softSkills, languages, education, experience, technicalSkills} = ResumeInfo;
  return (
    <section id="resume" className="pt-28 text-white/95 k2d">
      <div className="container mx-auto px-4">
        <h2 className="sectionTitle text-4xl font-bold text-center mb-12">Resume</h2>
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="flex flex-col gap-6 lg:w-2/5 flex-grow">
            {/* Profile */}
            <ResCard title="Profile" image="/profilePic.jpeg" name="Juan David Torres">
              <ul>
                <li>
                  <span className="font-medium mr-2 text-lg">Age: </span>
                  {profile.age}
                </li>
                <li>
                  <span className="font-medium mr-2 text-lg">Email: </span>
                  {profile.email}
                </li>
                <li>
                  <span className="font-medium mr-2 text-lg">City: </span>
                  {profile.city}
                </li>
              </ul>
            </ResCard>
            {/* Soft Skills */}
            <ResCard title="Soft Skills">
              <ul>
                {softSkills.map((skill) => (
                  <li key={skill}>
                    <span className="font-medium mr-2 text-xs">♦</span>
                    <span className=" text-lg">{skill}</span>
                  </li>
                ))}
              </ul>
            </ResCard>
            {/* Languages */}
            <ResCard title="Languages">
              <ul>
                {languages.map((language) => (
                  <li key={language}>
                    <span className="font-medium mr-2 text-xs">♦</span>
                    <span className=" text-lg">{language}</span>
                  </li>
                ))}
              </ul>
            </ResCard>
          </div>

          <div className="flex flex-col gap-6 lg:w-3/5 flex-grow">
            {/* Education */}
            <ResCard title="Education">
              <ul>
                {education.map((item) => (
                  <li key={item.title} className="flex flex-col w-full">
                    <div className="w-full flex relative">
                      <h1 className="">{item.title}</h1>
                      <p className="absolute right-0">{`${item.start} - ${item.end}`}</p>
                    </div>
                    <p className="text-xs text-white/50 ml-3 uppercase">{item.location}</p>
                  </li>
                ))}
              </ul>
            </ResCard>

            {/* Experience */}
            <ResCard title="Experience">
              <ul>
                {experience.map((item) => (
                  <li key={item.title} className="flex flex-col w-full">
                    <div className="w-full flex relative">
                      <h1 className="">{item.title}</h1>
                      <p className="absolute right-0">{`${item.start} - ${item.end}`}</p>
                    </div>
                    <p className="text-base text-white/70 ml-3">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </ResCard>

            {/* Technical Skills */}
            <ResCard title="Technical Skills">
              <ul>
                {technicalSkills.map((skill) => (
                  <li key={skill.name}>
                    <TechSkill name={skill.name} rating={skill.rating} />
                  </li>
                ))}
              </ul>
            </ResCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
