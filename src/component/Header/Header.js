import Logo from "./logo-1.png"
import "./Header.css"
import { Link } from "react-router-dom"


function Header(){
 return(
    <div className="div">
      
     <div className="parent">
     <div className="logo">
     <Link  to="/"><img src={Logo}/></Link>
     </div>
     
     <div className="nav">
        
            <li><Link to="/Service"  style={{ color:'white' ,textDecoration: 'none'}}>Services</Link></li>
            <li> <Link to="/Pricing"  style={{color:'white' ,    textDecoration: 'none'}}>Pricing</Link> </li>
            <li> <Link to="/About"  style={{ color:'white' ,  textDecoration: 'none'}}>About</Link>  </li>
            <li> <Link to="/Blog"  style={{ color:'white' ,  textDecoration: 'none'}}>Blog</Link></li>
      </div>      
     <div className="nav-contact">
       <button><Link to="/Contact" style={{ color:"#38A1FF" , textDecoration: 'none'}}>Contact</Link></button>
      </div>   
     
      </div> 


 

    </div>
    );
}
export default Header;