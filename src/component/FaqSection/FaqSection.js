import "./FaqSection.css"
import Plus from "./Vector.png"
function FaqSection(){
    return(
        <div className="faq">
 <div className="faq-1">
    <h3>FAQs</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .</p>
  </div>

  <div className="faq-2">
    <div className="faq-2-1">
        <img src= {Plus}></img>
        <span>How do you ensure the security of my personal and financial information?</span>
    </div>
    <div className="faq-2-1">
    <img src= {Plus}></img>
        <span>How do you help with finance management?</span>
    </div>
    <div className="faq-2-1">
    <img src= {Plus}></img>
        <span>How can I apply for a loan with your company?</span>
    </div>
    <div className="faq-2-1">
    <img src= {Plus}></img>
        <span>What services does your company offer?</span>
    </div>
    <div className="faq-2-1">
    <img src= {Plus}></img>
        <span>How do I contact customer support?</span>
    </div>
  </div>

        </div>
    )
}
export default FaqSection;