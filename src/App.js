 import {Routes, Route} from "react-router-dom";
 import HomePage from "./pages/HomePage";
 import Service from "./pages/Service";
 import Pricing from "./pages/Pricing";
 import About from "./pages/About";
 import Blog from "./pages/Blog";
 import Contact from "./pages/Contact";
 
 
 
 
function App() {
  return(
    <Routes>
   <Route path="" element={<HomePage />}  />
   
   <Route path="/Service" element={<Service />}  />

   <Route path="/Pricing" element={<Pricing />}  />

   <Route path="/About" element={<About />}  />
    

   <Route path="/Blog" element={<Blog />}  />
   
   <Route path="/Contact" element={<Contact />}  />

   

      
    </Routes>
  ); 
  
}


export default App;

