import { useState, useEffect } from "react";


function RamdomBeer() {

    const [RandomBeer, setRandomBeer] = useState([]);

    useEffect(() => {
      fetch("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response) => response.json())
        .then((data) => setRandomBeer(data))
  
        .catch((error) => {
          console.log(error);
        });
    }, []);



  return (
    <div>

      <h1>{RandomBeer.name}</h1>
      <img src={RandomBeer.image_url} alt={RandomBeer.name} width={100}/>
      <p>{RandomBeer.tagline}</p>
      <p>{RandomBeer.first_brewed}</p>
      <p>{RandomBeer.attenuatio_leve}</p>
      <p>{RandomBeer.description}</p>
      <p>{RandomBeer.contributed_by}</p>

    

    </div>
  )
}



export default RamdomBeer