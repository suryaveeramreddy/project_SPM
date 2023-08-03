import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

function Certification() {
    const [username, Setusername] = useState("");
    const [no_of_certifications, Setno_of_certifications] = useState("");
    const [successfull_certifications, Setsuccessfull_certifications] = useState("");
    const [certi1_name, Setcerti1_name] = useState("");
    const [certi1_mentor,Setcerti1_mentor] = useState("");
    const [certi1_date,Setcerti1_date] = useState("");
    const [certi2_name, Setcerti2_name] = useState("");
    const [certi2_mentor,Setcerti2_mentor] = useState("");
    const [certi2_date,Setcerti2_date] = useState("");
    const [certi3_name, Setcerti3_name] = useState("");
    const [certi3_mentor,Setcerti3_mentor] = useState("");
    const [certi3_date,Setcerti3_date] = useState("");

    function handleSubmit(){

        let obj = {
          username:username,
          no_of_certifications:no_of_certifications,
          successfull_certifications:successfull_certifications,

          certifications:[
            {
              name:certi1_name,
              mentor:certi1_mentor,
              date:certi1_date

            },
            {
              name:certi2_name,
              mentor:certi2_mentor,
              date:certi2_date
            },
            {
                name:certi3_name,
                mentor:certi3_mentor,
                date:certi3_date
  
            },
          ]
        }
        console.log(obj)
     axios.post('http://localhost:8009/certification_details',{obj})
     .then(res=>console.log(res))
     .catch(err => console.log(err))
  
      }

    
    return (
        <>

            <div style={{
                display: 'block',
                width: 700,
                padding: 30
            }}>
                <h4>Add Certification details</h4>
                <Form>
                    <Form.Group>
                        <Form.Label>Enter RollNumber:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter RollNo" onChange={(e)=>Setusername(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Certification 1 name</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter Certification name" onChange={(e)=>Setcerti1_name(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mentor</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mentor Name" onChange={(e)=>Setcerti1_mentor(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date of Completion</Form.Label>
                        <Form.Control type="text" placeholder="Enter date like (Jan-2022)" onChange={(e)=>Setcerti1_date(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Certification 2 name</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter Certification name" onChange={(e)=>Setcerti2_name(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mentor</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mentor Name" onChange={(e)=>Setcerti2_mentor(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date of Completion</Form.Label>
                        <Form.Control type="text" placeholder="Enter date like (Jan-2022)" onChange={(e)=>Setcerti2_date(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Certification 3 name</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter Certification name" onChange={(e)=>Setcerti3_name(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mentor</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mentor Name" onChange={(e)=>Setcerti3_mentor(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date of Completion</Form.Label>
                        <Form.Control type="text" placeholder="Enter date like (Jan-2022)" onChange={(e)=>Setcerti3_date(e.target.value)}/>
                    </Form.Group>
                    <Row>
                        <Col>

                            <Form.Group className="mt-3" controlId="formBasicPassword">
                                <Form.Label>No of Certification</Form.Label>
                                <Form.Control type="number" placeholder="Enter No of Certifications" onChange={(e)=>Setno_of_certifications(e.target.value)}/>
                            </Form.Group>
                        </Col>
                        <Col>

                            <Form.Group className="mt-3" controlId="formBasicPassword">
                                <Form.Label>Total Certifications</Form.Label>
                                <Form.Control type="number" placeholder="Total Certifications" onChange={(e)=>Setsuccessfull_certifications(e.target.value)}/>
                            </Form.Group>
                        </Col>
                    </Row>


                    <Button variant="primary" type="submit" >
                        submit
                    </Button>
                </Form>
            </div>
        </>

    )
}

export default Certification;