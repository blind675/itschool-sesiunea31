import Dropdown from 'react-bootstrap/Dropdown';

function ChangeLocation(props) {

  // Cand dam click pe un element al dropdown-ului, actualizam state-ul parintelui, cu orasul curent.
  function changeSelectedCity(city) {
    // Primim de la parinte functia care actualizeaza state-ul sectiunii.
    props.setCurrentLocation(city);
  }

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Alege orasul
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => changeSelectedCity("Bucuresti")}>Bucuresti</Dropdown.Item>
          <Dropdown.Item onClick={() => changeSelectedCity("Cluj")} >Cluj</Dropdown.Item>
          <Dropdown.Item onClick={() => changeSelectedCity("Brasov")}>Brasov</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default ChangeLocation;
