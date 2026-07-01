import "./Header.css";
import placeholderIcon from "../../assets/icons/placeholder.png";
import emailIcon from "../../assets/icons/email.png"; 
import logo from "../../assets/icons/logo.png"; 
import menuButton from "../../assets/icons/more.png";
import { useState, useRef, useEffect } from "react";
import {Link} from "react-router-dom";
 

function Header () {
  // tracks whether menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu (){
    setMenuOpen(menuOpen => !menuOpen);
  }


  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(()=> {
      // closes menu when you click anywhere outside the menu.
     function handleClick(event) {
       if (menuRef.current && 
        buttonRef.current &&
        !menuRef.current.contains(event.target) && 
        !buttonRef.current.contains(event.target))
       {
        setMenuOpen(false);
       }
     }

     document.addEventListener('click', handleClick);
     return () => {document.removeEventListener('click', handleClick)};
  },[]);


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
   
    function handleScroll(){

      if(window.scrollY > 100){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  },[]);

  

  return(
      <div className="header">

        <div className="contact-band">
          <span><img src={placeholderIcon}/>Mwembe, Catheral Road</span>
          <span>Open hours&gt; Mon-Sat:9am-5pm|Sun:9am-2pm  </span>
          <a href="mailto:patiencejelagatt@gmail.com"><img src={emailIcon} alt="" />palalume@gmail.com</a>
        </div>

        <div className={`nav-bar ${scrolled ? "scrolled" : ""}`}>

            <div className="logo"><img src={logo} alt="" /></div>

            <div>
                <a href="#" 
                 ref={buttonRef}
                 onClick={(e) => {e.preventDefault(), openMenu()}} 
                 className="menu-button">
                  <img src={menuButton} alt="" />
                </a>
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/about">Gallery</Link>
                <Link to="/about">Services</Link>
                <Link to="/about">Shop</Link>
                <Link to="/about">Contact</Link>
            </div>

            <button>Book Appointment</button>

        </div>

        <div 
         ref={menuRef}
         className={`menu ${menuOpen ? "open" : ""}`}>
            <div className="menu-nav-links">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/About" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
                <Link to="/Gallery" onClick={() => setMenuOpen(false)}>
                  Gallery
                </Link>
                <Link to="/Services" onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
                <Link to="/Shop" onClick={() => setMenuOpen(false)}>
                  Shop
                </Link>
                <Link to="/Contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
            </div>
        </div>

      </div>
  );
}

export default Header;