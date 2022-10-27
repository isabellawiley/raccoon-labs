import {Switch, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import HowToBuy from './HowToBuy';
import NavBar from './NavBar';
import Pedals from './Pedals';
import Contact from './Contact';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/pedals'>
          <Pedals />
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
      </Switch>
    </div>
  );
}

export default App;
