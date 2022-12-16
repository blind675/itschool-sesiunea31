import "./styles.css";
import { useState, useEffect } from "react";
// Importam componentele create.
import { UserList } from "./components/UserList";
import ChangeLocationSection from "./components/ChangeLocationSection";
import UserAddForm from "./components/UserAddForm";
import extraData from "./data.json";

export default function App() {
  const [apiUsers, setApiUsers] = useState(extraData);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setApiUsers([...extraData, ...data]);
      });
  }, []);

  // Functie addNewUser adauga un nou user in state, deci va produce afisarea noului user pe ecran.
  // Atentie, apelul functiei se face la submiterea formularului, deci ea trebuie sa fie pasata catre formular.
  function addNewUser(user) {
    const newUserList = [user, ...apiUsers];

    setApiUsers(newUserList);
  }

  return (
    <div className="App mx-5 my-3">
      <ChangeLocationSection />
      {/* Pasam functia care actualizeaza state-ul catre formular.
      Functia va fi apelata la submiterea formularului, rezultand in actualizarea state-ului lui App. */}
      <UserAddForm addNewUser={addNewUser} />
      {/* Afisarea userilor este responsabilitatea componentei UserList.
      Cand state-ul lui App se schimba, UserList primeste o noua valoare pentru prop-ul users, deci afiseaza noii useri pe ecran. */}
      <UserList users={apiUsers} />
    </div>
  );
}
