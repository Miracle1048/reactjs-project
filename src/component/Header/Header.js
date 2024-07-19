import Logo from "./logo-1.png"
import "./Header.css"
import { Link } from "react-router-dom"


function Header(){
 return(
    <div className="div">
      
     <div className="parent">
     <div className="logo">
     <Link to="/"><img src={Logo}/></Link>
     </div>
     
     <div className="nav">
        
            <li><Link to="/Service">Services</Link></li>
            <li> <Link to="/Pricing">Pricing</Link> </li>
            <li> <Link to="/About">About</Link>  </li>
            <li> <Link to="/Blog">Blog</Link></li>
      </div>      
     <div className="nav-contact">
      <button>Contact</button>
      </div>   
     
      </div> 


 

    </div>
    );
}
export default Header;