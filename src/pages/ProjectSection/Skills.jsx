const Skills = ({skills}) => {
    
    return ( 
        <div className="skillsContainer">
            {skills.map((skill, index) => (
                <div className="skillsItem" key={index} >
                    <span>{skill}</span>
                </div>
            ))
            }
        </div>
     );
}
 
export default Skills;