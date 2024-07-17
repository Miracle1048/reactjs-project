import Header from "../component/Header/Header";
import HeroSection from "../component/HeroSection/HeroSection";
import About from "../component/About/About";
import Invest from "../component/Investing/investing";
import Blog from "../component/Blog/blog";
import CTA from "../component/CTA/CTA"
import Footer from "../component/FOOTER/footer";
function HomePage(){
    return(
        <div>
         <Header />
         <HeroSection />
         <About />
         <Invest />
         <Blog />
         <CTA />
         <Footer />
        </div>
    )
}
export default HomePage;