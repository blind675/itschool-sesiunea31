import {useState} from "react";
import ChangeLocation from "./ChangeLocation";
import CurrentLocation from "./CurrentLocation";

function ChangeLocationSection() {
  // State-ul sectiunii:
  const [currentLocation, setCurrentLocation] = useState("Bucuresti");

  // function changeLocation(newLocation) {
  //   setCurrentLocation(newLocation);
  // }

  return (
    <div>
      {/* Valoarea state-ului este pasata catre copilul care va afisa state-ul pe ecran. */}
      <CurrentLocation currentLocation={currentLocation} />
      {/* Pasam functia care modifica state-ul catre copilul care va modifica state-ul. */}
      <ChangeLocation setCurrentLocation={setCurrentLocation} />
    </div>
  )
}

export default ChangeLocationSection;
