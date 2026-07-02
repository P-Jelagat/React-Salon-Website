import Hero from "../components/hero/Hero";
import "./Gallery.css"
import searchIcon from "../assets/icons/magnifying-glass.png"
import galleryHero from "../assets/images/guilherme-petri-PtOfbGkU3uI-unsplash.jpg"

import { useState } from "react";

const images = import.meta.glob("../assets/images/*.{png}", {
    eager: true,
    import: "default"
});

function GalleryContent(){

    const [selectedCategory, setSelectedCategory] = useState("All");

        const hairstyles = [
            {
                id: 1,
                image: images["../assets/images/twist1.jpg"],
                category: "Twists"
            },
            {
                id: 2,
                image: "/images/twists2.jpg",
                category: "Twists"
            },
            {
                id: 3,
                image:"/images/twists3.jpg",
                category: "Twists"
            },
            {
                id: 4,
                image: "/images/twists4.jpg",
                category: "Twists"
            },
            {
                id: 5,
                image: "/images/braids1.jpg",
                category: "Braids"
            },
            {
                id: 6,
                image: "/images/braids2.jpg",
                category: "Braids"
            },
            {
                id: 7,
                image: "/images/braids3.jpg",
                category: "Braids"
            },
            {
                id: 8,
                image: "/images/braids4.jpg",
                category: "Braids"
            },
            {
                id: 9,
                image: "/images/locs1.jpg",
                category: "Locks"
            },
            {
                id: 10,
                image:"/images/locs2.jpg",
                category: "Locks"
            },
            {
                id: 11,
                image: "/images/locs3.jpg",
                category: "Locks"
            },
            {
                id: 12,
                image: "/images/blowout1.jpg",
                category: "Blowout"
            },
            {
                id: 13,
                image: "/images/blowout2.jpg",
                category: "Blowout"
            },
            {
                id: 14,
                image: "/images/blowout3.jpg",
                category: "Blowout"
            }
        ];

    const filteredImages = 
     selectedCategory === "All" ? hairstyles : hairstyles.filter(
        style => style.category === selectedCategory
     );

    const styles = [
        "Twists",
        "Braids",
        "Locks",
        "Blowout",
        "Curl Definition"      
    ];


    return(
        <div className="gallery-content">
            <div className="search">
                <div className="search-text">
                    <p>Get inspiration for your next style!</p>
                </div>

                <div className="input">
                    <input type="text" placeholder="'twists, braids, locks...'"/>
                    <button className="search-button"><img src={searchIcon} alt="" /></button>
                </div>
            </div>

            <div className="search-options">
                <p className="search-label">Search options: </p>

                <div className="carousel-window">
                    <div className="options-track">

                        {[...styles, ...styles, ...styles].map((style, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory("")}
                            >
                                {style}
                            </button>
                        ))}

                    </div>
                </div>

            </div>

            <div className="catalogue">
                {filteredImages.map(style => (
                    <img
                        key={style.id}
                        src={style.image}
                        alt={style.category}
                    />
                ))}
            </div>

        </div>
    );
}

function Gallery(){
    return(
        <div className="gallery-container">
        { console.log(images)}
             <Hero 
               buttonDisplay={{display: "none"}}
               heading={"Our Gallery"}
               className={"gallery-hero"}
               heroImage={galleryHero}
             />
             <GalleryContent />
        </div>
    );
}

export default Gallery;