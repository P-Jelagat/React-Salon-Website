import "./Header.css";
import placeholderIcon from "../../assets/icons/placeholder.png";
import emailIcon from "../../assets/icons/email.png"; 
import logo from "../../assets/icons/logo.png"; 
import menuButton from "../../assets/icons/more.png";
import { useState, useRef, useEffect } from "react";
 

function Header () {
  // tracks whether menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu (){
    setMenuOpen(menuOpen => !menuOpen);
  }

  // closes menu when you click anywhere outside the menu.
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(()=> {
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
  

  return(
      <div className="header">

        <div className="contact-band">
          <span><img src={placeholderIcon}/>Mwembe, Catheral Road</span>
          <span>Open hours&gt; Mon-Sat:9am-5pm|Sun:9am-2pm  </span>
          <a href="mailto:patiencejelagatt@gmail.com"><img src={emailIcon} alt="" />palalume@gmail.com</a>
        </div>

        <div className="nav-bar">

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
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Gallery</a>
              <a href="">Services</a>
              <a href="">Shop</a>
              <a href="">Contact</a>
            </div>

            <button>Book Appointment</button>

        </div>

        <div 
         ref={menuRef}
         className={`menu ${menuOpen ? "open" : ""}`}>
            <div className="menu-nav-links">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Gallery</a>
              <a href="">Services</a>
              <a href="">Shop</a>
              <a href="">Contact</a>
            </div>
        </div>

      </div>
  );
}

export default Header;