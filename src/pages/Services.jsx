import "./Services.css";
import Hero from "../components/hero/Hero";
import servicesHeroImage from "../assets/images/greg-trowman-jsuWg7IXx1k-unsplash.jpg"
import { useState } from "react";
const images = import.meta.glob("../assets/images/*.png",{
    eager:true,
    import: "default"
});



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



const services = [
    // TWISTS
    {
        id: 1,
        category: "Twists",
        name: "Mini Twists",
        image: images["../assets/images/twists5.png"],
        description: "A lightweight protective style that promotes length retention and is perfect for everyday wear.",
        price: "From Ksh 3,500"
    },
    {
        id: 2,
        category: "Twists",
        name: "Micro Twists",
        image: images["../assets/images/twists4.png"],
        description: "Tiny, long-lasting twists that offer incredible versatility and a natural look.",
        price: "From Ksh 5,500"
    },
    {
        id: 3,
        category: "Twists",
        name: "Tribal Twists",
        image: images["../assets/images/twists3.png"],
        description: "A stylish fusion of traditional tribal partings with modern twist techniques.",
        price: "From Ksh 4,500"
    },

    // BRAIDS
    {
        id: 4,
        category: "Braids",
        name: "Mini Braids",
        image: images["../assets/images/braids4.png"],
        description: "Small protective braids designed for flexibility, durability and easy styling.",
        price: "From Ksh 3,800"
    },
    {
        id: 5,
        category: "Braids",
        name: "Micro Braids",
        image: images["../assets/images/braids3.png"],
        description: "Intricate braids that create a full, natural appearance with endless styling options.",
        price: "From Ksh 6,000"
    },
    {
        id: 6,
        category: "Braids",
        name: "Tribal Braids",
        image: images["../assets/images/braids2.png"],
        description: "Beautifully patterned braids inspired by traditional African hairstyling.",
        price: "From Ksh 4,800"
    },

    // LOCKS
    {
        id: 7,
        category: "Locks",
        name: "Sister Locks",
        image: images["../assets/images/locs1.png"],
        description: "Elegant, fine locs that offer maximum styling versatility and a lightweight feel.",
        price: "Consultation Required"
    },
    {
        id: 8,
        category: "Locks",
        name: "Wicks",
        image: images["../assets/images/locs2.png"],
        description: "Bold, thick locs that make a statement while remaining easy to maintain.",
        price: "Consultation Required"
    },
    {
        id: 9,
        category: "Locks",
        name: "Loc Retwist",
        image: images["../assets/images/locs3.png"],
        description: "Professional maintenance to keep your locs healthy, neat and well-defined.",
        price: "From Ksh 2,000"
    },
    {
        id: 10,
        category: "Locks",
        name: "Loc Installation",
        image: images["../assets/images/locs1.png"],
        description: "Begin your loc journey with a professional installation tailored to your hair goals.",
        price: "Consultation Required"
    },

    // CORNROWS
    {
        id: 11,
        category: "Cornrows",
        name: "Classic Cornrows",
        image: images["../assets/images/twists1.png"],
        description: "Neat, timeless straight-back cornrows suitable for all ages and occasions.",
        price: "From Ksh 1,500"
    },
    {
        id: 12,
        category: "Cornrows",
        name: "Freestyle Cornrows",
        image: images["../assets/images/twists1.png"],
        description: "Creative braided patterns customized to suit your style and personality.",
        price: "From Ksh 2,500"
    },
    {
        id: 13,
        category: "Cornrows",
        name: "Stitch Cornrows",
        image: images["../assets/images/twists1.png"],
        description: "Sharp, clean stitch braids with crisp partings for a polished finish.",
        price: "From Ksh 2,800"
    }
];


function ServiceInfo({ serviceImage, serviceName, description, price }) {
    return (
        <div className="service-card">
            <img src={serviceImage} alt={serviceName} />

            <div className="service-card-info">
                <h3>{serviceName}</h3>
                <p>{description}</p>
                <p>{price}</p>

                <button>Book</button>
            </div>
        </div>
    );
}




function ServicesContent(){

    const [selectedCategory, setSelectedCategory] = useState("All");

const filteredServices =
    selectedCategory === "All"
        ? services
        : services.filter(
              service => service.category === selectedCategory
          );

    return(
        <div className="services-content">
            <div className="heading-text">
                <h2>Our Services</h2>
                <p>Your next appointment is one click away!
                Take a look and feel free to  book with us.</p>
                
            </div>

            <div className="service-options-display">

                <div className="side-nav">
                    <p>Service Options</p>
                    {styleOptions.map( (option) => {
                        return(
                        <button 
                            onClick={() => setSelectedCategory(option.text)}
                            key={option.id}
                            className={option.className}>
                                {option.text}
                        </button>
                        );
                    }
                    )
                    }
                </div>

                <div className="service-info-container">
                        <button
                            onClick={() => setSelectedCategory("All")}
                        >
                            Reset
                        </button>

                        <div className="service-info">

                            {filteredServices.map(service => (
                                <ServiceInfo
                                    key={service.id}
                                    serviceImage={service.image}
                                    serviceName={service.name}
                                    description={service.description}
                                    price={service.price}
                                />
                            ))}

                        </div>


                </div>

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