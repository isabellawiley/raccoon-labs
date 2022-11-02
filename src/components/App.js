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

function App() {
  const [pedal, setPedal] = useState({});
  // console.log(pedal);

  return (
    <div>
      <NavBar setPedal={setPedal} allPedals={allPedals}/>
      <div className='container'>
      <Switch>
        <Route exact path='/'>
          <Home />
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
          <Pedal selectedPedal={pedal} />
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
