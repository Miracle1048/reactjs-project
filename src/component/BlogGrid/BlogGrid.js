import "./BlogGrid.css"
import img1 from "./finwise5 2.png"
import img2 from "./finwise5 2 (1).png"
import img3 from "./finwise5 2 (2).png"
import img4 from "./finwise5 2 (3).png"
import img5 from "./finwise5 2 (4).png"
import img6 from "./finwise5 2 (5).png"
function BlogGrid(){
return(
    <div className="grid-1">
      <div className="grid-item-1">
      <img src={img1}></img>
      <h6>FINANCE and ECONOMICS</h6>
      <div className="text1">
      <p>Big tech’s dominance is straining the logic of passive investing</p>
      </div>
      
      </div>
      <div className="grid-item-1">
        <img src={img2}></img>
        <h6>FINTECH</h6>
       <div className="text1">
       <p>The story of how Dave took the long road to become a neobank</p>
       </div>
        
      </div>
      <div className="grid-item-1">
      <img src={img3}></img>
      <h6>FINTECH</h6>
      <div className="text1">
      <p>The story of how Dave took the long road to become a neobank</p>
      </div>
      
      </div>
      <div className="grid-item-1">
      <img src={img4}></img>
      <h6>FINTECH</h6>
      <div className="text1">
      <p>The story of how Dave took the long road to become a neobank</p>
      </div>
      
      </div>
      <div className="grid-item-1">
      <img src={img5}></img>
      <h6>FINANCE and ECONOMICS</h6>
      <div className="text1">
      <p>The story of how Dave took the long road to become a neobank</p>
      </div>
      
      </div>
      <div className="grid-item-1">
      <img src={img6}></img>
      <h6>ADVERTISING</h6>
      <div className="text1">
      <p>The story of how Dave took the long road to become a neobank</p>
      </div>
      
      </div>
    </div>
)
}
export default BlogGrid;