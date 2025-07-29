import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample({patientsFirstName, setPatientsFirstName, patientsLastName, setPatientsLastName, patientsEmail, setPatientsEmail, patients, setPatients}) {
  const handleSetPatients = () => {
    setPatients(prevState => console.log(prevState))
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Patient's first name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={patientsFirstName} onChange={(e) => setPatientsFirstName(e.target.value)}/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Patient's last name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={patientsLastName} onChange={(e) => setPatientsLastName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Patient Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setPatientsEmail(e.target.value)}  value={patientsEmail}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button onClick={handleSetPatients} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample