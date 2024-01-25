import { useCallback, useRef, useState } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { useEffect } from "react";

import { sortPlacesByDistance } from "./loc.js";
const storedLocationIds = JSON.parse(localStorage.getItem("selectedPlaces"))||[];
const selectedPlaces = storedLocationIds.map(id=>AVAILABLE_PLACES.find(place=>place.id===id));
function App() {
  const [openModal,setOpenModal] = useState(false);
  const selectedPlace = useRef();
  const [avaliablePlaces, setAvaliablePlaces] = useState([]);
 
  const [pickedPlaces, setPickedPlaces] = useState(selectedPlaces);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvaliablePlaces(sortedPlaces);
    });

   
    //setPickedPlaces(selectedPlaces);
  }, []);

  const handleRemovePlace =  useCallback(  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    const storedLocationIDs = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem("selectedPlaces",JSON.stringify(storedLocationIDs.filter(id=> selectedPlace.current !== id)))
   setOpenModal(false);
  },[]);
  function handleStartRemovePlace(id) {
    setOpenModal(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setOpenModal(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedLocationIDs =
      JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedLocationIDs.indexOf(id) === -1) {
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedLocationIDs])
      );
    }
  }



  return (
    <>
      <Modal  open={openModal} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={avaliablePlaces}
          fallbackText="Sorting places at a distance...."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
