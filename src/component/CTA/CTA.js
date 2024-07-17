import "./CTA.css"
import image from "./Currencies World.png"

function CTA(){
 return(
    <div className="col1">
    <div className="text01">
        <h3>Simplifying Complexity with Innovative Solutions</h3>
        <button>Get Started</button>
    </div>
    <div className="picture">
        <img src={image}></img>
        
    </div>
    </div>
 )
}
export default CTA;