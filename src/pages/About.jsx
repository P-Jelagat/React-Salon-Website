import "./About.css";
import Hero from "../components/hero/Hero";
import aboutHeroImage from "../assets/images/leighann-blackwood-EUedgXxvTAs-unsplash.jpg"

function About(){
    return(
        <div className="about-container">
             <Hero 
             className={"about-hero"}
               buttonDisplay={{display: "none"}} 
               heroImage={aboutHeroImage}
               heading= "About Us"
             />
        </div>
    );
}

export default About;