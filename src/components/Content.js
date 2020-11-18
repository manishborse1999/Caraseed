import React from "react";
import "./css/content.css";
import logo1 from "../images/content1-min.jpg";
import logo2 from "../images/content2-min.jpg";


const Content = () => {
  return (
    <div className="content" id='content'>
      <div className="content__rowOne">
                 <h3>From Sowing to Growing to Selling, SEED’s
with You</h3>
        <div className="content__rowOneData">
 
    <div className="content__rowOneImage">
          <img src={logo1} alt="" />
        </div>
          <p>
          SEED’s conversational interface is simple to use, interactive,
efficient, and most importantly it will guide farmers from the
very first step of growing the yield to making the max profit.
All that needs to be done is to upload a picture of soil and the
preferences for the crops with the highest yield possible
would be advised in form of a list including expected price
and yield per acre. The produce information along with
harvest time and other details will be shared with retailers
and e-commerce companies . SEED also makes sure that
none of the resources gets waste in anyways so it alerts the
farmer in advance about any kind of weather turnout,
excessive humidity, or fast winds and therefore designs a
proper water management strategy under the crop
requirement so that both water and efforts can be
conserved. It’s still not done helping you as shipping crops
could be a little bit of troublesome, so we have partnered
with logistic companies that’d make sure about stable and timely transport with the company's details already
embedded into SEED’s database. So, personal digital assistant
would organize everything from growing to selling to
payment gateways reclaiming farmers a lot of manpower,
resources, therefore, making your every acre as yielding as
probable.
          </p>
        
        </div>
    
      </div>
      <div className="content__rowOne">
         <h3>Establishing Transparent Trustful Agri-chain</h3>
        <div className="content__rowOneData">
         
           <div className="content__rowOneImage">
          <img src={logo2} alt="" />
        </div>
          <p>
            Millions of farmers around a world often lack any access to
information and knowledge due to unawareness and
scantiness that leads to exploitation of them by middle men’s
illegitimate actions like paying half of the substantial price or
less for the yield and trading it for way more than its actual
cost to the consumers. That&#39;s why SEED aims to achieve full
visibility by excluding every mid-factor that could cause a
gratuitous hike on the price ensuring a maximum return on
the investment made by the agriculturist on the production.
It keeps farmers informed about the market price for the
output which is much acceptable for retailers or ecommerce
companies. The Bot will keep a tab on every produce
whether be its quality, quantity, production time, cost, or
every other relevant factor and keep every stakeholder be it
farmer, e-commercial companies, vendors updated with real-
time status of the production including the logistics. Thus,
eliminating middlemen and establishing a most transparent
system for the Agri chain to be carried out. This would make
sure for the consumers to get a reasonable price for the
production and guarantees a maximum profit and a high
return on the investment to country's backbone, the farmer.
          </p>
        
        </div>
       
      </div>
      
    </div>
  );
};

export default Content;
