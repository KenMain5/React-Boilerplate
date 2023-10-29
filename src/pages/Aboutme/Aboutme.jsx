import React from 'react'
import './Aboutme.scss'
import myImage from '/src/assets/Slice1.png'


function Aboutme(){
    return (
        <section id="about" className="aboutme">
          <h2>About Me</h2>
          <div className="aboutme__container">
            <div className="aboutme__image">
            <img src={myImage} alt="picture of him " />
            </div>
            <div className="aboutme__text">
              <p>I come from a military background and later pursued a Bachelor's degree in Cybersecurity. 
                It was during my final year that I discovered my genuine passion for programming. 
                With two years of self-taught experience in my toolbox, I'm eagerly preparing to attend a 
                coding bootcamp to enhance my skills and knowledge </p> 
                <div>
                  <div className="columnContainer">
                    <div className="textRow">
                      <p>Email: </p>
                      <p>kennyize15@gmail.com</p>
                    </div>
                    
                    <div className="textRow">
                      <p>Location:</p>
                      <p>PA, Philadelphia</p>
                    </div>
                    
                    <div className="textRow">
                      <p>Age:</p>
                      <p>28</p>
                    </div>
                  </div>

                  <div className="columnContainer">
                    <div className="textRow">
                      <p>Nationality: </p>
                      <p>Filipino</p>
                    </div>
                    <div className="textRow">
                      <p>Education: </p>
                      <p>University</p>
                    </div>
                    <div className="textRow">
                      <p>Degree: </p>
                      <p>B.S. in Cyber Security</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="aboutme__interestingFacts">
          </div>
        </section>
      );
}
 
export default Aboutme;
