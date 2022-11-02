import logo from "../assets/raccoon_labs_logo.png";
import instagram_logo from "../assets/instagram_logo.png" ;
import link_icon from "../assets/link_icon.png";

import { Link } from "react-router-dom";

function NavBar({setPedal, allPedals}) {
    

    function handleClick(index) {
        setPedal(allPedals[index]);
    }

    return(
        <div className="container">
            <div className="logo">
                <img src={logo} alt="logo"/>
                <h1>Raccoon Labs</h1>
            </div>
            <hr></hr>
            <div className="navbar">
                <a href="/">Home</a>
                <div className="dropdown">
                <button className="dropbtn"><a href="/pedals">Pedals</a></button>
                    <ul className="dropdown-content">
                        <li onClick={() => handleClick(0)}><Link to='/surf-and-destroy'>Surf & Destroy</Link></li>
                        <li onClick={() => handleClick(1)}><Link to='/ecto-cooler'>Ecto Cooler</Link></li>
                        <li onClick={() => handleClick(2)}><Link to='/noise-ensemble'>Noise Ensemble</Link></li>
                        <li onClick={() => handleClick(3)}><Link to='/acid-bath'>Acid Bath</Link></li>
                        <li onClick={() => handleClick(4)}><Link to='/stanky-driver'>Stanky Driver</Link></li>
                    </ul>
                </div>
                <a href="/how-to-buy">How To Buy</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <div className="links">
                        <a href="https://reverb.com/shop/raccoon-dad-fx" target="_blank" rel="noreferrer"><img src={link_icon} alt="link icon"/></a>
                        <a href="https://www.instagram.com/raccoonlabs/" target="_blank" rel="noreferrer"><img src={instagram_logo} alt="instagram"/></a>
                    </div>
            </div>
        </div>
    )
}

export default NavBar;