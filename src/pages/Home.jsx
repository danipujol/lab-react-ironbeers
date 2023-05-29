import React from "react"
import beersImage from "../assets/beers.png"
import newBeerImage from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"
import { Link } from "react-router-dom"



function Home() {
  return (
    <div>

<img src={beersImage} alt="beerImage" width={450} />
<br />
<Link to="/beers">All Beers</Link>
<br />
<img src={randomBeer} alt="randomBeer" width={450} />
<br />
<Link to="/random-beer">Random Beer</Link>
<br />
<img src={newBeerImage} alt="newBeerImage" width={450} />
<br />
<Link to="/new-beer">New Beer</Link>
<br />





  
    </div>
  )
}

export default Home