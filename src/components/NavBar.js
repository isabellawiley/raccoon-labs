
function NavBar() {

    return(
        <div className="navbar">
            <h1>Raccoon Labs</h1>
            <hr></hr>
            <ul>
                <li><a href='/'>Home</a></li>
                <div className='dropdown'>
                <li><a href='/pedals'>Pedals</a></li>
                <div className='dropdown-content'>
                    <a href='/'>pedal 1</a>
                    <a href='/'>pedal 2</a>
                    <a href='/'>pedal 3</a>
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