import "./About.css";
import Hero from "../components/hero/Hero";
import aboutHeroImage from "../assets/images/leighann-blackwood-EUedgXxvTAs-unsplash.jpg"

function About(){
    return(
        <div className="about-container">
             <Hero 
               buttonDisplay={{display: "none"}} 
               heroImage={aboutHeroImage}
               heroHeight={{height: "70vh"}}
               overlayHeight={{height: "70vh"}}
               heading= "About Us"
             />
        </div>
    );
}

export default About;