import "./footer.css"
import logo from "./logo.png"
function footer() {
    return(
        <div className="box-1">
        <div className="box-2">
         <div className="box-3">
          <img src={logo}></img>  
        </div> 
         <div className="box-4">
            <div className="box-4-1">
                <h4>Company</h4>
                <p>Home</p>
                <p>Services</p>
                <p>Pricing</p>
            </div>
            <div className="box-4-1">
            <h4>Information</h4>
                <p>About</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
            <div className="box-4-1">
            <h4>Social</h4>
                <p>Linkedin</p>
                <p>Facebook</p>
                <p>Instagram</p>  
            </div>
        </div> 
        </div>

        <div className="box-5">

        </div>

        <div className="box-6">
            <div>
            © 2023 WealthWise, Inc.
            </div>
            <div className="box-6-1">
            Designed by Youness daoudi
            </div>
        </div>
         
        </div>
    )
}
export default footer;