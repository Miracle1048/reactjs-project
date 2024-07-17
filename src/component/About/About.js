import img from "./Image.png"
import "./About.css"
import img2 from "./Investing 2.png"
import img3 from "./dollar-sign.png"
import img5 from "./briefcase.png"
import img6 from "./zap.png"
import img7 from "./grid.png"
import img8 from "./arrow.png"
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

    <div className="section-3">
      <div className="inner-2">
      <div className="grid">
        <h6>ABOUT US</h6>
        <h1>Financial Plan for Long-Term Success</h1>
        <p>We are committed to fostering the financial well-being of the next generation by encouraging them to take the proud and empowering step of micro-investing.</p>
      </div>
      <div class="grid-item1">
        <img className="vue" src={img2}></img>

      </div>
      <div class="grid-item1">
      <img className="icon"  src={img3}></img>
      <h2>Money Management</h2>
      <p>With experience in all market conditions, we recognize what processes and solutions.</p>
      </div>
      <div class="grid-item1">
      <img className="icon" src={img7}></img>
      <h2>Financial Planning</h2>
      <p>These plans may include investment strategies, savings plans, etc.</p>
      </div>
      <div class="grid-item1">
      <img className="icon" src={img5}></img>
      <h2>Strategic Partner</h2>
        <p>With experience in all market conditions, we recognize what processes and solutions.</p>
      </div>
      <div class="grid-item1">
      <img className="icon" src={img6}></img>
      <h2>Risk Management</h2>
      <p>With experience in all market conditions, we recognize what processes and solutions.</p>
      </div>
      <div className="annex">
        <img src= {img8}></img> <span>LEARN MORE</span>
      </div>

      </div>

     
    </div>
  </div>
    )
}
export default About;