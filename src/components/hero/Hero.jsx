import "./Hero.css";
import { Link } from "react-router-dom";

function Hero ( {
    buttonDisplay, heading, paragraph, className, heroImage, linkedPage }){


   return(
      <div className={`hero-container ${className}`}>

        <div className="hero-image" >
            <img src={heroImage}alt="" />
        </div>

        <div className="hero-overlay" >
            <div className="hero-overlay-text" >
                <h2>{heading}</h2>
                <p>{paragraph}</p>
                <Link to={linkedPage} style={buttonDisplay} className="explore-services">Explore Services</Link>

            </div>
        </div>

      </div>

      

   );

}




export default Hero;