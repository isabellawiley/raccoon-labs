import {Switch, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import HowToBuy from './HowToBuy';
import NavBar from './NavBar';
import Pedals from './Pedals';
import Contact from './Contact';
import { useState } from "react";
import allPedals from "../assets/pedalData.json";
import Pedal from './Pedal';
import { BiLinkExternal } from "react-icons/bi";
import '../styling/pedals.css'
import '../styling/responsive.css'
import { IconContext } from 'react-icons';

function App() {
  const [pedal, setPedal] = useState({});

  return (
    <div className='app'>
      <NavBar setPedal={setPedal} allPedals={allPedals}/>
      <Switch>
        <Route exact path='/'>
          <Home allPedals={allPedals} setPedal={setPedal} />
        </Route>
        <Route exact path='/pedals'>
          <Pedals allPedals={allPedals} setPedal={setPedal}/>
        </Route>
        <Route exact path='/how-to-buy'>
          <HowToBuy />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route path="/:id">
          <Pedal selectedPedal={pedal}  allPedals={allPedals}/>
        </Route>
      </Switch>
      <div className='footer'>
        <p>©2022 by Raccoon Labs. Proudly created by <a href='https://www.linkedin.com/in/isabella-wiley/' target="_blank" rel="noreferrer">
             Isabella Wiley 
            <IconContext.Provider value={{size: '.8em'}}>
              <BiLinkExternal/>
            </IconContext.Provider>
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

//BiLinkExternal