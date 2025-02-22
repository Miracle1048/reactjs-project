import "./SectionBlog.css"
import plate from "./Image (4).png"
import plate1 from "./finwise5 1 (3).png"
import plate2 from "./finwise5 1 (4).png"
import plate3 from "./finwise5 1 (5).png"
export default function SectionBlog(){
    return(
        <div className="section-blog">
            <div className="inner-section">
                <div className="inner-news">
                    <div className="plate">
                        <img src={plate} alt="structure"/>
                    </div>
                    <div className="blog-text">
                        <div className="blog-text-heading">
                            <h3>Personal Loans</h3>
                        </div>
                        <div className="blog-text-txt">
                            <p>Life is full of unexpected expenses, from home repairs to medical bills to car accidents. If you're facing a financial challenge and need help getting back on track, a personal loan can provide the funding you need to cover your expenses.</p>
                        </div>
                    </div>
                </div>
                <div className="inner-blog">
                    <div className="blog-card">
                        <div className="finwise5">
                           <img src={plate1}  alt="finwise"/>
                        </div>
                        <div className="edu-text">
                            <h4>Financial Education</h4>
                        </div>
                        <div className="use-text">
                            <p>Use positioning to fix topbars, sidebars, and backgrounds.</p>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="finwise5">
                            <img src={plate2}  alt="finwise"/>
                        </div>
                        <div className="edu-text">
                            <h4>Market Size</h4>
                        </div>
                        <div className="use-text">
                            <p>Use positioning to fix topbars, sidebars, and backgrounds.</p>
                        </div>

                    </div>
                    <div className="blog-card">
                        <div className="finwise5">
                            <img src={plate3}  alt="finwise"/>
                        </div>
                        <div className="edu-text">
                            <h4>Investing</h4>
                        </div>
                        <div className="use-text">
                            <p>Use positioning to fix topbars, sidebars, and backgrounds.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    
    )
}