import React from 'react'
import './Contact.scss'

function Contact() {
    return ( 
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <p>I am currently seeking employment, so if you have a job offer, or if you need any more information, please do not hesitate to contact me</p>
            <button className="button">Write Message</button>
            <div className="contact__icons">
                <a href='https://github.com/KenMain5' rel="noreferrer" target="_blank"><img src="/src/assets/github-icon.png"></img></a>
                <a href='https://www.linkedin.com/in/kenneth-arguelles-5b7710238/' rel="noreferrer" target="_blank"><img src="/src/assets/linkedin-icon.png"></img></a>
            </div>
        </section>
     );
}
 
export default Contact;
