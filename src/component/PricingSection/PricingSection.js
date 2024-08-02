import "./PricingSection.css"
function PricingSection(){
  return(
    <div className="pricing">
        
          <div className="pricing-text">
          <h3>We Have The Best Pricing Package</h3> 

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .</p>
          </div>


          <div className="pricing-box">

          <div className="pricing-box-1">
            <h5>STARTER PLAN</h5>
            <h3>$49/month</h3>
            <ul>
              <li>Get paid 2 days early</li>
              <li>Fee Free Overdraft</li>
              <li>Fee Free Overdraft</li>
              <li>Priority Support</li>
            </ul>
            <button>Get Started</button>
            
          </div>
          <div className="pricing-box-1-1">
           <h5>ENTERPRISE PLAN</h5>
            <h3>$99/month</h3>
            <ul>
              <li>No Debit Card Fees</li>
              <li>No Debit Card Fees</li>
              <li>No Debit Card Fees</li>
              <li>No Debit Card Fees</li>
              <li>No Debit Card Fees</li>
              <li>No Debit Card Fees</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="pricing-box-1">
          <h5>PRO PLAN</h5>
            <h3>$139/month</h3>
            <ul>
              <li>Get paid 2 days early</li>
              <li>Fee Free Overdraft</li>
              <li>Details spend Insights</li>
              <li>Priority Support</li>
            </ul>
            <button>Get Started</button>
          </div>

          </div>
          
          


           
      

    </div>
  )  
}
export default PricingSection;