import "./About.css";
import Hero from "../components/hero/Hero";
import aboutHeroImage from "../assets/images/leighann-blackwood-EUedgXxvTAs-unsplash.jpg"
import firstImage from "../assets/images/guilherme-petri-PtOfbGkU3uI-unsplash.jpg"
import secondImage from "../assets/images/secondImageAbout.png"
import thirdImage from "../assets/images/land-o-lakes-inc-UnSFmJCCrW0-unsplash.jpg"
import idea from "../assets/icons/idea.png"
import observation from "../assets/icons/diagnosis.png"
import achieved from "../assets/icons/benefit.png"
import { Link } from "react-router-dom";


function AboutContent(){
   return(
      <div className="about-content">

        <h2>Welcome To Pala Lume! </h2>
        <section>

           <div className="image">
            <img src={firstImage} alt="" />
           </div>

            <div className="about-text">
                <h3>The Observation...<img src={observation} alt="" /></h3>
                <p>Palalume was born from a simple observation: many women with naturally curly hair were being forced to become their own hair experts.</p>
                <p>Before finding the right products, techniques, and routines, countless hours were spent watching tutorials, reading articles, joining online communities, and experimenting with methods that often produced inconsistent results.</p> 
                <p>What should have been a journey of embracing natural beauty became a process of trial and error, frustration, and uncertainty. </p>
                <p>For many, there simply wasn't a trusted place to receive professional guidance tailored to the unique needs of textured hair.</p>
            </div>

        </section>

        <section >

            <div className="about-text">
                <h3>The Inspiration <img src={idea} alt="" /></h3>
                   <p>The idea behind Pala lume was to create the kind of salon many curl-loving women wished they had from the very beginning—a space where healthy curls are understood, celebrated, and cared for by trained professionals.</p>
                   <p>Instead of navigating shelves of products or testing countless routines in hopes of finding the right fit, clients can receive expert advice and services designed around their hair's specific needs.</p> 
                   <p>We believe that wearing your curls confidently should not require years of research or the risk of damaging your hair through constant experimentation.</p>
            </div>

           <div className="image">
             <img src={secondImage} alt="" />
           </div>

        </section>

        <section>

           <div className="image">
             <img src={thirdImage} alt="" />
           </div>

            <div className="about-text">
                <h3>What We've Built! <img src={achieved} alt="" /></h3>
                <p>Today, Pala lume stands as more than a salon; it is a haven for women who want to embrace their natural texture without the stress of figuring everything out alone.</p>
                <p>Our mission is to make professional curl care accessible, empowering, and effective, helping every client achieve healthy, thriving hair through knowledge, expertise, and intentional care. </p> 
                <p>By taking the guesswork out of the journey, we allow our clients to focus on what truly matters: enjoying and celebrating their curls with confidence.</p>
            </div>

        </section>

        <div className="about-page-cta">
          <h3>Ready to have the Pala Lume experience?</h3>
           <div className="aboutPage-cta-buttons">
             <Link to="/services" className="explore">Explore Services</Link>
             <Link to="/gallery" className="gallery">Visit Gallery</Link>
           </div>
        </div>

      </div>
   );
}

function About(){
    return(
        <div className="about-container">
             <Hero 
             className={"about-hero"}
               buttonDisplay={{display: "none"}} 
               heroImage={aboutHeroImage}
               heading= "About Us"
             />
             <AboutContent />
        </div>
    );
}

export default About;