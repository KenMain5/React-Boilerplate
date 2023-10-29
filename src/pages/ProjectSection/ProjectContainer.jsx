import ProjectItem from "./projectItem";



const ProjectContainer = () => {
    const projects = [
      {"id": 1, "name": "Car Rental Dealership", "description": "This was my first big project that I accomplished, initially it just started with HTML + CSS + JS but I redid it so that I can practice my React Skills", "skillsUsed": ["HTML", "SCSS", "REACT", "REDUX"], 'images': ['/src/assets/projects/carrental/carRental1.png']},
      {"id": 2, "name": "To Do List", "description": "This was my first big project that I accomplished, initially it just started with HTML + CSS + JS but I redid it so that I can practice my React Skills", "skillsUsed": ["TypeScript", "SCSS", "HTML"], 'images': ['/src/assets/comingsoon.jpeg']},
      {"id": 3, "name": "Weather application", "description": "This was my first big project that I accomplished, initially it just started with HTML + CSS + JS but I redid it so that I can practice my React Skills", "skillsUsed": ["TypeScript", "Python", "Java"], 'images': ['/src/assets/comingsoon.jpeg']}, 
      {"id": 4, "name": "Weather application 2", "description": "This was my first big project that I accomplished, initially it just started with HTML + CSS + JS but I redid it so that I can practice my React Skills", "skillsUsed": ["TypeScript", "Python", "Java"], 'images': ['/src/assets/comingsoon.jpeg']},
    ];


    return (
        <div className="projectsMainContainer">
          <div className="projectContainerRow">
              <ProjectItem project={projects[0]}/>
              <ProjectItem project={projects[1]}/>
          </div>

          <div className="projectContainerRow">
              <ProjectItem project={projects[2]}/>
              <ProjectItem project={projects[3]}/>
          </div>
          
        </div>
      );
}
 
export default ProjectContainer;



// '/src/assets/projects/carrental/carRental2.png', '/src/assets/projects/carrental/carRental3.png', '/src/assets/projects/carrental/carRental4.png'