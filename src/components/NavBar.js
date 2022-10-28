// import jsonData from "../assets/pedalData.json";

import { Link } from "react-router-dom";

function NavBar({setPedal, allPedals}) {
    

    function handleClick(index) {
        setPedal(allPedals[index]);
    }

    return(
        <div className="navbar">
            <h1>Raccoon Labs</h1>
            <hr></hr>
            <ul>
                <li><a href='/'>Home</a></li>
                <div className='dropdown'>
                <li><a href='/pedals'>Pedals</a></li>
                <div className='dropdown-content'>
                    <li onClick={() => handleClick(0)}><Link to='/surf-and-destroy'>Surf & Destroy</Link></li>
                    <li onClick={() => handleClick(1)}><Link to='/ecto-cooler'>Ecto Cooler</Link></li>
                    <li onClick={() => handleClick(2)}><Link to='/noise-ensemble'>Noise Ensemble</Link></li>
                    <li onClick={() => handleClick(3)}><Link to='/acid-bath'>Acid Bath</Link></li>
                    <li onClick={() => handleClick(4)}><Link to='/stanky-driver'>Stanky Driver</Link></li>
                </div>
                </div>
                <li><a href='/how-to-buy'>How To Buy</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar;