import "./Hero.css"
import img0 from "./Payment With Card 3.png"

export default function Hero(){
    return(
        <div className="hero">
            <div className="Container">
                <div className="card">
                    <img src= {img0} alt="payment with card"/> 
                </div>
                <div className="body-text">
                    <div className="award-text">
                        <h3>Award winning 
                        business management</h3>
                    </div>
                    <div className="we-text">
                        <p>We understand that running a business is challenging. That's why we offer business management services designed to help you achieve your goals and grow your business. Whether you're just starting out or looking to take your business to the next level, we have the tools and expertise you need to succeed</p>
                    </div>
                </div>

            </div>
        </div>
    )
}