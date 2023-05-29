import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Beers() {
  const [allBeers, setAllBeers] = useState([]);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => setAllBeers(data))

      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {allBeers.map((eachBeer, index) => {
        return (
           
          <div key={index}>
          <Link to={`/beers/${eachBeer._id}`}> <img src={eachBeer.image_url} width="80px" alt="beer" /> </Link>
            
             <h3>{eachBeer.name}</h3>
             <p>{eachBeer.tagline}</p>
             <p>Created by: {eachBeer.contributed_by}</p>
          
           
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
