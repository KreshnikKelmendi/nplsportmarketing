import { useState, useEffect } from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
import logoNpl from "../img/12logo.png";
import DropDown1 from "./DropDown1";
import DropDown2 from "./DropDown2";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');

    const handleScroll = () => {
        if (window.scrollY > 60) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
     
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    const navToggle = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');

        //toggler icon

        toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
         window.scrollTo({
            top: 0,
            left: 0,
        })
    }
     
    return(
        <>
         <div className="container-fluid position-relative p-0">
         <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
         <div className="brand-name">
              <Link onClick={() => window.scrollTo({
                      top: 0,
                      left: 0,
                  })} to="/"><img className="logo-npl" src={logoNpl} alt="npl" /></Link>
         </div>
         <ul className={active}>
            <li className="nav__item"><NavLink to="/" className="nav__link" onClick={navToggle} >Ballina</NavLink></li>
            <li className="nav__item"><NavLink to="/news" className="nav__link" onClick={navToggle}>Lajme</NavLink></li>
            <li className="nav__item"><NavLink to="/ads" className="nav__link" onClick={navToggle}>Shpalljet</NavLink></li>
            <li className="nav__item"><DropDown1 className="text-decoration-none" navToggle={navToggle} /></li>
            <li className="nav__item"><DropDown2 className="text-decoration-none" navToggle={navToggle} /></li>
            <li className="nav__item"><NavLink to="/contact" className="nav__link" onClick={navToggle}>Kontakti</NavLink></li>
         </ul>
         <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
         </div>
      </nav>
        
</div>
        </>
    )
}

export default Header;