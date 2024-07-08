import Logo from "./logo-1.png"
import "./Header.css"


function Header(){
 return(
    <div className="div">
      
     <div className="parent">
     <div className="logo">
     <img src={Logo}/>
     </div>
     
     <div className="nav">
        
            <li>Services</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Blog</li>
      </div>      
     <div className="nav-contact">
      <button>Contact</button>
      </div>   
     
      </div> 


 

    </div>
    );
}
export default Header;