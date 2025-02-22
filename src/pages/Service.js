import Header from "../component/Header/Header";
import Hero from "../component/Hero/Hero";
import SecFeatures from "../component/SecFeatures/SecFeatures";
import FinancialPlan from "../component/FinancialPlan/FinancialPlan";
import SectionPlan from "../component/SectionPlan/SectionPlan";
import SectionBlog from "../component/SectionBlog/SectionBlog";
import Footer from "../component/FOOTER/footer"; 

function Service(){
 return(
    <div>
    <Header />
    <Hero />
    <SecFeatures />
    <FinancialPlan />
    <SectionPlan />
    <SectionBlog />
    <Footer />
    </div>
 )
}
export default Service;