import "./Services.css";
import Hero from "../components/hero/Hero";
import servicesHeroImage from "../assets/images/greg-trowman-jsuWg7IXx1k-unsplash.jpg"


const styleOptions = [ 

    {
        id: 1,
        className: "twists",
        text: "Twists"
    },
    {
        id: 2,
        className: "braids",
        text: "Braids"
    },
    {
        id: 3,
        className: "locks",
        text: "Locks"
    },
    {
        id: 4,
        className: "cornrows",
        text: "Cornrows"
    },

];


function ServicesContent(){
    return(
        <div className="services-content">
            <div className="heading-text">
                <h2>Our Services</h2>
                <p>Your next appointment is one click away!
                Take a look and feel free to  book with us.</p>
                
            </div>

            <div className="side-nav">
                <p>Service Options</p>
                {styleOptions.map( (option) => {
                    return(
                     <button 
                      key={option.id}
                      className={option.className}>
                        {option.text}
                     </button>
                     );
                  }
                 )
                }
            </div>
        </div>
    );
};

function Services(){
    return(
        <div className="services-container">

             <Hero 
             className={"services-hero"}
               buttonDisplay={{display: "none"}} 
               heroImage={servicesHeroImage}
               heading= "Look Good, Feel Good!"
             />

             <ServicesContent />
        </div>
    );
};

export default Services;