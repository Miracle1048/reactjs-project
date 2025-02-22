import "./SectionPlan.css";
import imgII from "./finwise2 1.png"

export default function SectionPlan(){
    return(
        <div className="finance-section">
            <div className="plan-finance">
                <div className="finwiseII">
                    <img src={imgII} alt="finwise"/>
                </div>
                <div className="news-content">
                <div className="finance-p">
                    <h3>Financial Planning</h3>
                </div>
                <div className="trio-text">
                    <p>We understand that financial planning can be overwhelming and confusing. That's why we offer expert guidance and support to help you make informed decisions and achieve your goals.</p>
                </div>
                <div className="sub-text">
                    <h4>First Funding</h4>
                </div>
                <div className="trio-text">
                    <p>Whether you're planning for retirement, saving for a child's education, or buying a home, we have the tools and resources you need to succeed.</p>
                </div>
                <div className="sub-text">
                    <h4>Business Operational</h4>
                </div>
                <div className="trio-text">
                    <p>Our team of experienced financial planners will work with you to understand your unique needs and develop a customized plan that fits your goals.</p>
                </div>
                <div className="sub-text">
                    <h4>Business Expansion</h4>
                </div>
                <div className="trio-text">
                    <p>We'll help you navigate complex financial issues, such as investment strategies, tax planning, and risk management, and provide ongoing support.</p>
                </div>
                </div>
            </div>
        </div>
    )
}