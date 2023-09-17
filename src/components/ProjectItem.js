import React from "react";

function ProjectItem({ name, about, technologies }) {
  const emoteGit = "https://github.com/BookmDan/emoteShiba"
  return (
    <div className="project-item">
      <h3>
        <a href={emoteGit} target="_blank" rel="noopener norefferer">
        {name}
        </a>
      </h3>
          
      <p>{about}</p>
      <div className="technologies">
        {technologies && Array.isArray(technologies) ? technologies.map((technology, index) => (
          <span key={index}> {technology} </span>
        ))
          : 'No technologies provided'}
      </div>
    </div>
  );
}

export default ProjectItem;
