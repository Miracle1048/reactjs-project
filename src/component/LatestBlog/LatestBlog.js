import "./LatestBlog.css"
import image from "./finwise10 (1).png"
import img from "./finwise10.png"
function LatestBlog(){
 return (
    <div>
     <div className="blog">
      <h2>Blog</h2>
      
      <div className="blog-1">
      
        <p>Linkedin</p>
        <p>Twitter</p>
        <p>Instagram</p>
    
      </div>
      
     </div>

     <div className="blog-2">
        <div className="blog-2-1">
            <h3>Latest</h3>
        </div>
        <div className="blog-2-1">
            <div className="blog-2-1-1">
                <div className="image-1">
              <img src={img}></img>
                </div>
                <div className="text-1">
                    <h5>FINTECH</h5>
                    <p>The story of how Dave took the long road to become a neobank</p>
                    <h6>APR 4, 2023</h6>
                </div>
            </div>
            <div className="blog-2-1-1">
            <div className="image-1">
            <img src={image}></img>
            </div>
            <div className="text-1">
                <h5>ADVERTISING</h5>
                <p>How To Set Short and Long Term Career Goals</p>
                <h6>MAR 28, 2023</h6>

            </div>
            </div>
        </div>

      </div>
    </div>
 )
}
export default LatestBlog;