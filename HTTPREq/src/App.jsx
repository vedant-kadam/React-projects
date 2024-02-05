import { useRef, useState, useCallback } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import { exportUserPlaces, fetchUserPlaces } from "./http.js";
import Error from "./components/Error.jsx";
import { useEffect } from "react";

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdatingState, setErrorUpdatingStat] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const[error,setError] = useState();

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }
  


  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    
    try {
      
      await exportUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setErrorUpdatingStat({
        message: error.message || "Failed to update places",
      });
      setUserPlaces(userPlaces);
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    try {
      await exportUserPlaces(userPlaces.filter(place=>place.id !== selectedPlace.current.id))
      setModalIsOpen(false);
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingStat({message:error.message|| "failed to delete place"})
    }
  
  }, [userPlaces]);

  function handleError() {
    setErrorUpdatingStat(null);
  }
  useEffect(()=>{
    fecthSeletedPlaces();
  },[]);

  async function fecthSeletedPlaces(){
    setIsLoading(true);
    try {
      const selectedUserPlaces =   await fetchUserPlaces();
      setUserPlaces(selectedUserPlaces);
      
    } catch (error) {
      setError({message:error.message || "cannot load your selected data" })
    }
    setIsLoading(false);
  }

  return (
    <>
      <Modal open={errorUpdatingState} onClose={handleError} >
        <Error
          title="An error occured"
          message={errorUpdatingState?.message}
          onConfirm={handleError}
        />
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
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
        {error && <Error title="AN error occured" message={error.message} />}
       {!error && <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
          isLoading={isLoading}
          loadingText="loading...."
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
