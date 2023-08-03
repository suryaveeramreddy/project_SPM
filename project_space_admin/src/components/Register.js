import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Register() {
const [username, Setusername] = useState("");
const [password, SetPassword] = useState("");
const [name, Setname] = useState("");
const [branch, Setbranch] = useState("");
const [year, Setyear] = useState("");
const [stream, Setstream] = useState("");

function post() {
    let obj = {
        username:username,
        password:password,
        name:name,
        branch:branch,
        year:year,
        stream:stream
        
      }
      console.log(obj)
   axios.post('http://localhost:8009/authentication',{obj})
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
                <h4>Create Student</h4>
                <Form>
                    <Form.Group>
                        <Form.Label>Enter RollNumber:</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter RollNo" onChange={(e)=>Setusername(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="Enter password" onChange={(e)=>SetPassword(e.target.value)}/>
                    </Form.Group>
                    <Row>
                        <Col>

                            <Form.Group className="mt-3" controlId="formBasicPassword">
                                <Form.Label>Student Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Student Name" onChange={(e)=>Setname(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col>

                            <Form.Group className="mt-3" controlId="formBasicPassword">
                                <Form.Label>Branch</Form.Label>
                                <Form.Control type="Text" placeholder="Enter Branch" onChange={(e)=>Setbranch(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            <Form.Group className="mt-3" controlId="formBasicPassword">
                                <Form.Label>PassOut-Year</Form.Label>
                                <Form.Control type="number" placeholder="Enter Pass-Out Year" onChange={(e)=>Setyear(e.target.value)}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mt-3" controlId="formBasicPassword">
                                <Form.Label>Stream</Form.Label>
                                <Form.Control type="text" placeholder="Enter DriveReady Stream" onChange={(e)=>Setstream(e.target.value)}/>
                            </Form.Group>
                        </Col>
                    </Row>



                    <Button variant="primary" type="submit" className='mt-3' onClick={post}>
                        Register
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Register;