 import {Routes, Route} from "react-router-dom";
 import HomePage from "./pages/HomePage";
 import Blog from "./pages/Blog";
function App() {
  return(
    <Routes>
   <Route path="" element={<HomePage />}  />

   <Route path="/Blog" element={<Blog />}  />
    

      
    </Routes>
  ); 
  
}

export default App;

