import "./HeroSection.css"
import picture from "./Investing-1.png"

function HeroSection() {
 return (

<div class="HeroSection">
   {/* HeroSection */}
   <div class="section-2">
      <div class="text-1">
         <h1>Empower Your Financial Future with FinWise</h1>
         <p>We help businesses stand out in crowded markets. When customers have a positive experience with a brand, they are more likely to remember it.</p>
         <button>Get Started</button>
      </div>
      <div class="pic">
         <img src={picture}></img>
      </div>
      </div>
   </div>

 );
}
export default HeroSection;
