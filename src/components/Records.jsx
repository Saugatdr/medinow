import Table from "react-bootstrap/Table";
import Form from "./Form";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

function Records() {
  const [patientFirstName, setPatientFirstName] = useState("");
  const [patientLastName, setPatientLastName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patients, setPatients] = useState([]);

  return (
    <Container>
      <Row>
        <Col>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Patient First Name</th>
                <th>Patient Last Name</th>
                <th>Patient Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jim</td>
                <td>Lamar</td>
                <td>@jlm</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <Form
            patientFirstName={patientFirstName}
            setPatientFirstName={setPatientFirstName}
            patientLastName={patientLastName}
            setPatientLastName={setPatientLastName}
            patientEmail={patientEmail}
            setPatientEmail={setPatientEmail}
            setPatients={setPatients}
            patients={patients}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Records;
