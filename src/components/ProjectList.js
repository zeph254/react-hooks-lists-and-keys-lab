// import React from "react";
// import ProjectItem from "./ProjectItem";

// function ProjectList({ projects }) {
//   console.log(projects);
//   return (
//     <div id="projects">
//       <h2>My Projects</h2>
//        {projects.map((project)=>{
//         <div id="project-list" key={project.id}>
//         <ProjectItem name= {project.name} technologies={project.technologies} about={project.about}/>
//       </div>

//        })}
      
//     </div>
//   );
// }

// export default ProjectList;
import React from 'react';  
import ProjectItem from './ProjectItem';  

const ProjectList = ({ projects }) => {  
  return (  
    <div>  
      {projects.map(project => (  
        <ProjectItem  
          key={project.id} // Use the project's id as the key  
          id={project.id}   // Pass the id as a prop (if needed)  
          name={project.name} // Pass the name or other relevant props  
          description={project.description} // Pass other properties as needed  
        />  
      ))}  
    </div>  
  );  
};  

export default ProjectList;