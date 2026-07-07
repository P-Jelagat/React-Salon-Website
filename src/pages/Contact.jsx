import "./Contact.css";
import Hero from "../components/hero/Hero";
import contactHeroImage from "../assets/images/blowout1.png"
import phoneIcon from "../assets/icons/call.png"
import emailIcon from "../assets/icons/email.png"
import whatsappIcon from "../assets/icons/linkedin.png"
import storeIcon from "../assets/icons/store.png"


        const cardDetails = [
            {
                  id: 1,
                  name:"phone ",
                  link: "#",
                  image: phoneIcon,
                  title: "Phone",
                  contactInfo: "+254116108172"
            },
            {
                  id: 2,
                  name:"email",
                  link: "mailto:patiencejelagatt@gmail.com",
                  image: emailIcon,
                  title: "Email",
                  contactInfo: "palalume@gmail.com"
            },
            {
                  id: 3,
                  name:"whatsapp",
                  link: "#",
                  image: whatsappIcon,
                  title: "WhatsApp",
                  contactInfo: "+254116108172"
            },
            {
                  id: 4,
                  name:"shop",
                  link: "#",
                  image: storeIcon,
                  title: "Store",
                  contactInfo: "Mwembe, Cathedral Road - Kisii"
            },
        ];

function ContactContents(){

        function ContactCard({name, image, title, contactInfo, link}){
            return(
                <div className={`contact-card ${name}`}>
                <a href={link}> <img src={image} alt="" /></a>
                    <h3>{title}</h3>
                    <p>{contactInfo}</p>
                </div>
            );

        }
        return(
            <div className="contact-contents">
                <div className="outreach-info">
                    {cardDetails.map( detail =>
                       <ContactCard 
                         name={detail.name}
                         image={detail.image}
                         title={detail.title}
                         contactInfo={detail.contactInfo}
                         link={detail.link}
                       />
                     )
                    }
                </div>

                <div className="contact-form">
                    <div className="form-text">
                        <h3>Get In Touch</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Aspernatur rerum iure quo. Ullam dignissimos nesciunt enim,
                              ipsa ab reiciendis neque deleniti inventore quis culpa optio eligendi animi dicta? 
                              Sequi, vel.</p>
                    </div>

                    <form action="">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="'e.g Patience Jelagat'" required/>

                        <label htmlFor="email">Name</label>
                        <input type="email" placeholder="'e.g patienceJelagatt@gmail.com'" required/>

                        <label htmlFor="Subject">Name</label>
                        <input type="text" placeholder="'e.g Consultation inquiry'" />

                        <label htmlFor="name">Message</label>
                        <textarea type="text" placeholder="'Describe the type of service you need from us...'" required></textarea>

                        <button className="submit-button">Submit</button>
                    </form>
                </div>

            </div>
        );
    }


function Contact(){
    return(

        <div className="contact-container">
             <Hero 
             className={"contact-hero"}
               buttonDisplay={{display: "none"}} 
               heroImage={contactHeroImage}
               heading= "Contact Us"
             />
             <ContactContents />
        </div>
    );
};

export default Contact;