
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerDetails() {

    const [BeerDetails, setAllBeerDetails] = useState([]);
    const params = useParams();
    useEffect(() => {
      fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
        .then((response) => response.json())
        .then((data) => setAllBeerDetails(data))
  
        .catch((error) => {
          console.log(error);
        });
    }, []);



  return (
    <div>

      <h1>{BeerDetails.name}</h1>
      <img src={BeerDetails.image_url} alt={BeerDetails.name} width={100}/>
      <p>{BeerDetails.tagline}</p>
      <p>{BeerDetails.first_brewed}</p>
      <p>{BeerDetails.attenuatio_leve}</p>
      <p>{BeerDetails.description}</p>
      <p>{BeerDetails.contributed_by}</p>

    
      
    

    </div>
  )
}

export default BeerDetails