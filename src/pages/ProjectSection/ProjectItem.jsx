import Skills from "./skills";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const ProjectItem = ({project}) => {
    return ( 
        <div className="projectItem">
            <div className="imageContainer">
                {project.images.map((image, index) => (
                    <img key={index} src={image}></img>
                ))}
             
                {/* <div className="projectItem__icon"><ArrowLeftOutlinedIcon/></div>
                <div className="projectItem__icon"><ArrowRightOutlinedIcon/></div> */}
            </div>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <Skills skills={project.skillsUsed}/>
        </div>
     );
}
 
export default ProjectItem;