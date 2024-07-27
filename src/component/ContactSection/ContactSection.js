import { useState } from "react"; 
import "./ContactSection.css"
import icon1 from "./logo (1).png"
import icon3 from "./logo (1).png"
import icon2 from "./logo (2).png"


function ContactSection(){

  const[Name, setName] = useState("");
  const[Email, setEmail] = useState("");
  

  function handleName(event){
 setName(event.target.value)
  }

  function handleEmail(event){
    setEmail(event.target.value)
  }
  

  return(
  <div className="contact">
   <div className="contact-1">
    <div className="contact-1-1">
        <h4>LOCATION</h4>
        <p>Greenfields, Citytown, <br></br>
        London, UK, 52050</p>
    </div>
    <div className="contact-1-1">
        <h4>WORKING HOURS</h4>
        <p>Monday To Friday <br></br>
9:00 AM to 8:00 PM <br></br>
<span>Our Support Team is available 24Hrs</span></p>
    
    </div>
    <div className="contact-1-1">
        <h4>CONTACT US</h4>
        <p>020 7993 2905 <br></br>
        Email@gmail.com</p>
    </div>

    <div className="contact-img">
      <div>
        <img src={icon1} alt="x logo" ></img>
        
       
      </div>
      <div><img src={icon3} alt="x logo" ></img></div>
      <div> <img src={icon2} alt="linkedIn logo" ></img></div>
    </div>
   </div>
   <div className="contact-2">
    <div>
    <h4>CONTACT</h4>
    <h1>Let’s get Started!</h1>
    <p>Fill up the Form and our team will get back to within 24 hrs</p>
    </div>

    <div className="contact-2-1">
        <form>
          
          <input value={Name} onChange={handleName} type="text" placeholder="Name"></input>

          
          <input value={Email} onChange={handleEmail} className="mail" type="email" placeholder="Email"></input>

          <textarea  placeholder="Message"></textarea>

          <button>Send Message</button>
        </form>
    </div>
   </div>
  </div>
  )
}
export default ContactSection;