import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample({patientFirstName, setPatientFirstName, patientLastName, setPatientLastName, patientEmail, setPatientEmail, setPatients,patients}) {
  const handleSetPatients = (e) => {
    e.preventDefault();
    
    setPatients(prevPatients =>[...prevPatients,{
        patientFirstName,
        patientLastName,
        patientEmail
    }
    ])
   
  }
   console.log(patients)
  
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>Patient's first name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={patientFirstName} onChange={(e) => setPatientFirstName(e.target.value)}/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Patient's last name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={patientLastName} onChange={(e) => setPatientLastName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Patient Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setPatientEmail(e.target.value)}  value={patientEmail}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button onClick={(e) => handleSetPatients(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample