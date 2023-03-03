import React from "react";
import "./ProjectCardStyle.css";
import ProjectCard from "./ProjectCard";
import WorkData from "./WorkData"

const ProjectWork = () => {
  return (
    <div className="projectCard-container">
      <h1 className="projectCard-heading">Projects</h1>
      <div className="container">
        {WorkData.map((value,index)=>{
            return(
                <ProjectCard 
                key={index}
                imgSrc={value.imgSrc}
                title={value.title}
                text={value.text}/>
            )
        })}
        
      </div>
    </div>
  );
};

export default ProjectWork;
