
import './App.css';
import BeerDetails from './pages/BeerDetails';
import Beers from './pages/Beers';
import Home from './pages/Home';
import RandomBeer from './pages/RamdomBeer';

import { Link } from'react-router-dom';

import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
    
   
    <Link to="/"><img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png'/></Link>


<Routes>

<Route path="/beers" element={<Beers/>}/>
<Route path="/" element={<Home/>}/>
<Route path="/beers/:id" element={<BeerDetails/>}/>
<Route path="/random-beer" element={<RandomBeer/>} />


</Routes>

    </div>
  );
}

export default App;
