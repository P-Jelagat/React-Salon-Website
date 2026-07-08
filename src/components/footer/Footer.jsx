import "./Footer.css"
import locationIcon from "../../assets/icons/placeholder.png"
import phoneIcon from "../../assets/icons/call.png"
import emailIcon from "../../assets/icons/email.png"
import instagramIcon from "../../assets/icons/instagram (1).png"
import linkedinIcon from "../../assets/icons/linkedin.png"
import xIcon from "../../assets/icons/logos.png"
import { Link } from "react-router-dom"

function Footer (){

    return(
        <footer>
           <div className="footer-content">
              <div className="location-info">
                <h4>Location</h4>
                  <p><img src={locationIcon} alt="" />Mwembe, Cathedral Road, Kisii Town</p>
                  <p><img src={phoneIcon}alt="" />+254116108172</p>
                  <a href="mailto:patiencejelagatt@gmail.com"><img src={emailIcon} alt="" />palalume@gmail.com</a>
                  <p>Open-Hours: Monday-Saturday: 9am to 5pm | Sunday: 9am to 2pm</p>
              </div>
           

                <div className="quick-links">
                    <h4>Quick-Links</h4>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact Us</Link>


                    <div className="quick-links-icons">
                        <a href="https://www.instagram.com/patience.jelagat"><img src={instagramIcon} alt="" /></a>
                        <a href="https://www.linkedin.com/in/patience-jelagat-5632aa348/"><img src={linkedinIcon} alt="" /></a>
                        <a href="https://x.com/PJelagat617"><img src={xIcon} alt="" /></a>
                    </div>
                </div>

                <div className="services-cta">
                    <h4>Services and Inquiry CTA</h4>
                </div>

            </div> <hr />

                <div className="copyright">
                    <p>&copy; 2026 Pala Lume. All rights reserved </p>
                    <p>Website by <a href="https://portfolio-murex-two-75.vercel.app/" className="dev-contact">Patience Jelagat</a></p>
                 </div>
        </footer>
    );

}

export default Footer;