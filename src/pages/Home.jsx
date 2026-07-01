import Hero from "../components/hero/Hero";
import "./Home.css"
import homeAboutImage from "../assets/images/adrian-fernandez-t1jlLrsMpjc-unsplash.jpg"
import homeHeroImage from "../assets/images/jessica-felicio-_cvwXhGqG-o-unsplash (1).jpg"

function HomeAbout(){
    return(
        <div className="home-about">

            <div className="stacked-divs">

                <div className="first-div">
                    <img src={homeAboutImage} alt="" />
                </div>
                <div className="second-div"></div>
                <div className="third-div"></div>
                <div className="fourth-div"></div>

            </div>

            <div className="home-about-text">
                <h3>What We Do:</h3>
                <p>At Pala Lume, we believe that healthy hair is the foundation of every great style. Specializing in textured and natural hair care, we are dedicated to providing personalized services that celebrate the beauty and versatility of every client.</p>
                <p>Whether you're looking for protective styling, restorative treatments, or a fresh new look, our approach combines professional expertise with genuine care to help you achieve your hair goals.</p>
                <p>We strive to create a welcoming and relaxing environment where every appointment feels like a self-care experience. By focusing on healthy hair practices, quality products, and attention to detail, we help our clients maintain strong, beautiful hair while expressing their unique style with confidence.</p>

                 <div className="home-about-cta">
                    <button className="generic">Learn More</button>
                    <button className="primary">Book Appointment</button>
                 </div>

            </div>

        </div>
    );
}

function Carousel (){

    return(

        <div className="home-about-carousel">

            <div className="carousel-cards">

                <article>
                    <img src={homeAboutImage}  alt="" />
                </article>

                <article>
                    <div className="carousel-card-text">
                        <h4>500+</h4>
                        <p>Healthy Hair Transformations</p>
                    </div>
                </article>
                            
                <article>
                    <img src={homeAboutImage} alt="" />
                </article>

                <article>
                    <div className="carousel-card-text">
                        <h4>100%</h4>
                        <p>Client-Focused Care</p>
                    </div>
                </article>

                <article>
                    <img src={homeAboutImage}  alt="" />
                </article>

                <article>
                    <div className="carousel-card-text">
                        <h4>500+</h4>
                        <p>Healthy Hair Transformations</p>
                    </div>
                </article>
                            
                <article>
                    <img src={homeAboutImage} alt="" />
                </article>

                <article>
                    <div className="carousel-card-text">
                        <h4>100%</h4>
                        <p>Client-Focused Care</p>
                    </div>
                </article>

                <article>
                    <img src={homeAboutImage}  alt="" />
                </article>

                <article>
                    <div className="carousel-card-text">
                        <h4>1000+</h4>
                        <p>Satisfied Return Clients</p>
                    </div>
                </article>

            </div>
            
        </div>

    );
     
}

function Home (){
    return(
        <div className="home-container">

         <Hero 
           heroImage={homeHeroImage}
           heroHeight={{height: "80vh"}}
           overlayHeight={{height: "80vh"}}
           heading={"Curly Naturals' Haven"}
           paragraph={"Where Healthy Hair is Achieved and Maintained Through Expert Care"}
         />
         <HomeAbout />
         <Carousel />
          
        </div>
    );
}

export default Home;