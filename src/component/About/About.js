import img from "./Image.png"
import "./About.css"
function About() {
    return(
 <div>
   <div className="section-3">
    <div className="inner-1">
      <div className="pic-1"><img src={img}></img></div>
      <div className="text">
         <h6>ABOUT US</h6>
         <h1>Providing Innovation Services and Solutions</h1>
         <p>We are committed to fostering the financial well-being of the next generation by encouraging them to take the proud and empowering step of micro-investing.</p>
      </div>
    </div>
   </div>
        </div>
    )
}
export default About;