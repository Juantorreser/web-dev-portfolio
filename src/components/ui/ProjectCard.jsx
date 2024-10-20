import React from "react";

const ProjectCard = ({project}) => {
  return (
    <div>
      <div className="p-6 flex flex-col gap-1">
        {!project.image && (
          <div className="w-full h-[350px] bg-gray-100 rounded border border-dashed border-gray-300 flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h18M3 5a2 2 0 012-2h14a2 2 0 012 2M3 5v14a2 2 0 002 2h14a2 2 0 002-2V5M8 11h8M8 15h8"
              />
            </svg>
            <span className="text-gray-400 mt-2">No Image Available</span>
          </div>
        )}
        {project.image && (
          <img
            src={project.image}
            alt="Project Image"
            style={{
              width: "100%", // The image will use the full width of its container
              height: "auto", // Set the fixed height for the image
              objectFit: "cover", // Ensures the image covers the area without distortion
            }}
            className="rounded"
          />
        )}

        <div className="rounded bg-bg_sec py-4 px-6 text-center">
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <div className=" w-full h-[2px] bg-white/10 my-3"></div>
          <p className="mt-2 text-white/60 text-sm">{project.stack}</p>
          <div className="mt-4 flex gap-4 justify-center">
            {project.codeLink && (
              <button className="bg-bg hover:bg-bg/50 text-white/90 py-2 px-4 rounded flex items-center justify-center gap-2">
                <img src="/codeIcon.png" alt="LinkIcon" />
                <a href={project.codeLink} target="_blank">
                  Code
                </a>
              </button>
            )}

            {project.liveLink && (
              <button className="bg-pri hover:bg-pri/70 text-white/90 py-2 px-4 rounded flex items-center justify-center gap-2">
                <img src="/linkIcon.png" alt="LinkIcon" />
                <a href={project.liveLink} target="_blank">
                  Visit Site
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
