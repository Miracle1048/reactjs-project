import "./investing.css"
import img from "./Image (2).png"

function Invest(){
    return(
        <div>
           <div className="container">
            <div className="invest">
                <h5>OUR INVESTING</h5>
            </div>
            <div className="box1">
                <h1>Empowering Your Business With Financial Capabilities</h1>
            </div>

            <div className="box2">
                <img src={img}></img>
            </div>
           </div>
        </div>
    )
}
export default Invest;