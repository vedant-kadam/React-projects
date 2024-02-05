import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import {sortPlacesByDistance} from '../loc.js';
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const[error,setError] = useState();

  useEffect(() => {
    getAvailablePlaces();
  }, []);

  async function getAvailablePlaces() {
    // fetch("http://localhost:3000/places")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data.places);
    //     setAvailablePlaces(data.places)
    //   });
    setIsLoading(true);
    try {
      let places = await fetchAvailablePlaces();
      navigator.geolocation.getCurrentPosition((position)=>{
        const sortedPlaces = sortPlacesByDistance(places,position.coords.latitude,position.coords.longitude);
        setAvailablePlaces(sortedPlaces);
        setIsLoading(false);
      })
     
    } catch (ex) {
      setIsLoading(false);
       setError({message:ex.message || "Could not fetch data , please try again"});
    }

   
   
  }
  if(error){
    return <Error title="An Error Occured" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      loadingText="Fetching places data..."
      isLoading={isLoading}
      onSelectPlace={onSelectPlace}
    />
  );
}
