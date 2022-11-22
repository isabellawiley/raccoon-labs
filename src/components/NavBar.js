import logo from "../assets/raccoon_labs_logo.png";
import instagram_logo from "../assets/instagram_logo.png" ;
import link_icon from "../assets/link_icon.png";
import { Link } from "react-router-dom";
import "../styling/navbar.css"
import { useState } from "react";

function NavBar({setPedal, allPedals}) {
    const [isActive, setIsActive] = useState(false);
    const [showDrop, setShowDrop] = useState(false);

    function handleClick(index) {
        setPedal(allPedals[index]);
    }

    return(
        <div className="header">
            <div className="navbar-container">
                <div className="head">
                    <a href="/">
                        <div className={isActive ? "logo-hide" : "logo"}>
                            <img src={logo} alt="logo"/>
                            <h1>Raccoon Labs</h1>
                        </div>
                    </a>
                    <div className={isActive ? 'change' : 'menu'} onClick={()=> setIsActive(!isActive)}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
                <hr></hr>
                <div className="navigation">
                    <div className={isActive ? "navbar expanded" : "navbar"}>
                        <ul id="nav-list">
                            <li><a href="/">Home</a></li>
                            <li>
                                <div className="dropdown">
                                    <button className="dropbtn"><a href="/pedals">Pedals</a><i className={isActive ? "arrow" : null} onClick={() => setShowDrop(!showDrop)}></i></button>
                                    {/* <div className={isActive ? "navigation-menu expanded" : "navigation-menu"}> */}
                                    <ul className={showDrop ? "show dropdown-content" : "dropdown-content"}>
                                        <li onClick={() => handleClick(0)}><Link to='/surf-and-destroy'>Surf & Destroy</Link></li>
                                        <li onClick={() => handleClick(1)}><Link to='/ecto-cooler'>Ecto Cooler</Link></li>
                                        <li onClick={() => handleClick(2)}><Link to='/noise-ensemble'>Noise Ensemble</Link></li>
                                        <li onClick={() => handleClick(3)}><Link to='/acid-bath'>Acid Bath</Link></li>
                                        <li onClick={() => handleClick(4)}><Link to='/stanky-driver'>Stanky Driver</Link></li>
                                    </ul>
                                {/* </div> */}
                                </div>
                            </li>
                            <li><a href="/how-to-buy">How To Buy</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="links">
                        <a href="https://reverb.com/shop/raccoon-dad-fx" target="_blank" rel="noreferrer"><img src={link_icon} alt="link icon"/></a>
                        <a href="https://www.instagram.com/raccoonlabs/" target="_blank" rel="noreferrer"><img src={instagram_logo} alt="instagram"/></a>
                    </div>
                </div>
                {/* <div className="navigation">
                    
                    <div className={isActive ? "navigation-menu expanded" : "navigation-menu"}>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/pedals">Pedals</a>
                            </li>
                            <li>
                                <a href="/how-to-buy">How To Buy</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default NavBar;