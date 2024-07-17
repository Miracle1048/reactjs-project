import "./blog.css"
import img from "./Image (3).png"
import img1 from "./finwise1.png"
import img2 from "./finwise2.png"
import img3 from "./finwise3.png"
function blog(){
 return(
    <div className="wrap">
      <div className="col">
        <h6>OUR BLOG</h6>
        <h2>Sharing our
        Knowledge</h2>
      </div>

      <div className="col-1">
       <div className="new">
        <h6>NEWS</h6>
        <h1>Minimum Wage May Lead to higher levels of poverty</h1>
        <p>The U.S. government reached the $31.4 trillion debt limit imposed by Congress on Jan. 19, and since then has been relying on accounting tricks by the Treasury Department.</p>
       </div>
       <div className="new-pic">
      <img src={img}></img>
       </div>
      </div>
     
     <div className="col-2">
     <div className="column">
     <img src={img1}></img>
      <h5>FINTECH</h5>
      <p>The story of how Dave took the long road to become a neobank</p>

      <p>BY ASHLEY VANCE</p>
     </div>
     <div className="column">
      <img src={img2}></img>
      <h5>FINTECH</h5>
      <p>The story of how Dave took the long road to become a neobank</p>

      <p>BY ASHLEY VANCE</p>
     </div>
     <div className="column">
      <img src={img3}></img>
      <h5>FINTECH</h5>
      <p>The story of how Dave took the long road to become a neobank</p>

      <p>BY ASHLEY VANCE</p>
     </div>
     </div>
     

    </div>
 )
}
export default blog;