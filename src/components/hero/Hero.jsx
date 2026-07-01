import "./Hero.css";
// import HomeheroImage from "../../assets/images/jessica-felicio-_cvwXhGqG-o-unsplash (1).jpg"

function Hero ( {
    buttonDisplay, heading, paragraph, 
    heroImage, overlayOpacity, heroHeight }){


//    return(
//       <div className="hero-container">

//         <div className="hero-image">
//             <img src={heroImage}alt="" />
//         </div>

//         <div className="hero-overlay">
//             <div className="hero-overlay-text">
//                 <h2>Curly Naturals' Haven</h2>
//                 <p>Where Healthy Hair is Achieved and Maintained Through Expert Care</p>
//                 <button>Explore Services</button>

//             </div>
//         </div>

//       </div>

      

//    );

   return(
      <div className="hero-container">

        <div className="hero-image" style={heroHeight}>
            <img src={heroImage}alt="" />
        </div>

        <div className="hero-overlay" style={overlayOpacity}>
            <div className="hero-overlay-text">
                <h2>{heading}</h2>
                <p>{paragraph}</p>
                <button style={buttonDisplay}>Explore Services</button>

            </div>
        </div>

      </div>

      

   );

}




export default Hero;