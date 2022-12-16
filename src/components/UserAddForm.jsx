import {useState} from 'react';
// Importam componentele din React Bootstrap.
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UserAddForm(props) {
  // State-urile corepsunzatoare inputurilor formularului:
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Preluarea valorilor din inputuri si actualizarea state-ului:
  function handleNameChange(event) {
    const newName = event.target.value;

    setName(newName);
  }

  function handleEmailChange(event) {
    const newEmail = event.target.value;

    setEmail(newEmail);
  }

  // Submiterea formularului:
  function handleFormSubmit(event) {
    // Prevenim comportamentul default.
    event.preventDefault();
    // Cream un nou user, pe baza datelor introduse in inputuri.
    const newUser = {
      name: name,
      email: email
    }

    // Primim ca prop functia ce modifica state-ul parintelui, deci afiseaza noul user pe ecran.
    // Apelam functia primita ca prop de la parinte, deci afisam noul user pe ecran.
    props.addNewUser(newUser);
  }

  return (
    // Utilizam componentele din React Bootstrap, precum si clasele din Bootstrap.
    // Atasam handlerul pentru submiterea formularului.
    <Form className={"my-5"} onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="Add name"
          // Atasam handlerul pentru schimbarea valorii inputului.
          onChange={handleNameChange}
          // Legam continutul inputului de valoarea state-ului.
          value={name}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Add email"
          // Atasam handlerul pentru schimbarea valorii inputului.
          onChange={handleEmailChange}
          // Legam continutul inputului de valoarea state-ului.
          value={email}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UserAddForm;
