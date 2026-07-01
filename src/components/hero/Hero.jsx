import "./Hero.css";
// import HomeheroImage from "../../assets/images/jessica-felicio-_cvwXhGqG-o-unsplash (1).jpg"

function Hero ( {
    buttonDisplay, heading, paragraph, className, heroImage }){


   return(
      <div className={`hero-container ${className}`}>

        <div className="hero-image" >
            <img src={heroImage}alt="" />
        </div>

        <div className="hero-overlay" >
            <div className="hero-overlay-text" >
                <h2>{heading}</h2>
                <p>{paragraph}</p>
                <button style={buttonDisplay}>Explore Services</button>

            </div>
        </div>

      </div>

      

   );

}




export default Hero;