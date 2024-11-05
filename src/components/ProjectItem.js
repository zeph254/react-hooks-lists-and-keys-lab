import React from "react";

function ProjectItem({name, about, technologies}) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {technologies.map((technologies, index) => (
          <span className="SPAN" key={index} >
            {technologies}
          </span>
        
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
// import React from 'react';  
// import ProjectItem from './ProjectItem';  

// const ProjectList = ({ projects }) => {  
//   return (  
//     <div>  
//       {projects.map(project => (  
//         <ProjectItem  
//           key={project.id} // Use the project's id as the key  
//           id={project.id}   
//           name={project.name}   
//           description={project.description}   
//           technologies={project.technologies} // Pass technologies prop  
//         />  
//       ))}  
//     </div>  
//   );  
// };  

// export default ProjectList;