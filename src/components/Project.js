import React from "react";
import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="my-20 text-4xl text-center">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <img  className="mb-6 rounded" src={project?.image} 
            height={150} width={150} alt="Project Image"/>
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project?.title}</h6>
                <p className="mb-2 text-neutral-400">{project?.description}</p>
                {project?.technologies.map((tech,indexone)=>
                <span key={indexone} className="text-nowrap mr-2 rounded bg-neutral-900 py-2 px-1 text-sm font-medium  text-purple-800 my-1 ">{tech}</span>)}
            </div>
             </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
