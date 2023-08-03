import axios from 'axios';
import React, { useState } from 'react'
import {Button,Form,Row,Col} from 'react-bootstrap';
// import './Adim_academicdetails.css';
function Adim_academicdetails() {
    const[username,setUsername] = useState("")
    const[totalSubjects,setTotalSubjects] = useState("")
    const[backlogs,setBacklogs]=useState("")
    const [sem1,setSem1] = useState("");
    const [sem1backlogs,setSem1BackLogs] = useState("");
    const [sem1Percent,setSem1Percent] = useState("");
    const [sem1Cgpa,setSem1Cgpa] = useState("");

    const [sem2,setSem2] = useState("");
    const [sem2backlogs,setSem2BackLogs] = useState("");
    const [sem2Percent,setSem2Percent] = useState("");
    const [sem2Cgpa,setSem2Cgpa] = useState("");

    const [sem3,setSem3] = useState("");
    const [sem3backlogs,setSem3BackLogs] = useState("");
    const [sem3Percent,setSem3Percent] = useState("");
    const [sem3Cgpa,setSem3Cgpa] = useState("");

    const [sem4,setSem4] = useState("");
    const [sem4backlogs,setSem4BackLogs] = useState("");
    const [sem4Percent,setSem4Percent] = useState("");
    const [sem4Cgpa,setSem4Cgpa] = useState("");
    
    const[sem,setSem]=useState([])
    function handleSubmit(){
      let obj = {
        username:username,
        total_subjects:totalSubjects,
        backlogs:backlogs,
        aca_details:[
          {
            sem:sem1,
            percentage : sem1Percent,
            cgpa:sem1Cgpa,
            backlogs:sem1backlogs
          },
          {
            sem:sem2,
            percentage : sem2Percent,
            cgpa:sem2Cgpa,
            backlogs:sem2backlogs
          },
          {
            sem:sem3,
            percentage : sem3Percent,
            cgpa:sem3Cgpa,
            backlogs:sem3backlogs

          },
          {
            sem:sem4,
            percentage : sem4Percent,
            cgpa:sem4Cgpa,
            backlogs:sem4backlogs
            


          }

        ]
      }
      console.log(obj)
   axios.post('http://localhost:8009/academic_details',{obj})
   .then(res=>console.log(res))
   .catch(err => console.log(err))

    }
  return (
    <div  className='d-flex justify-content-center' style={{height:"800px"}}>
    {/* <div className='d-flex justify-content-center '> */}
    <Form style={{marginLeft:"350px",marginTop:"80px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}/>
      </Form.Group>

      <Row>
        <Col>
      <Form.Group  className="mb-3" controlId="formBasicPassword">
        <Form.Label >No.of Subjects</Form.Label>
        <Form.Control type="text" placeholder="Enter Total Subjects" onChange={(e)=>setTotalSubjects(e.target.value)}/>
      </Form.Group> 
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>No.of Blacklogs</Form.Label>
        <Form.Control type="text" placeholder="Enter Total backlogs"onChange={(e)=>setBacklogs(e.target.value)} />
      </Form.Group>
      </Col> 
      </Row>
      <Row>
        <Col>
        <h5 className='mt-3 d-flex justify-content-center'>Enter Academicdetails</h5>
        </Col>
      </Row>

      <Row>
        <Col>
        <h7 className='mt-3 '>Sem-1</h7>
        </Col>
      </Row>



      <Row>
        <Col>
      <Form.Group  className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter semester as Roman" onChange={(e)=>{setSem1(e.target.value)}} />
      </Form.Group> 
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter No.of backlogs" onChange={(e)=>{setSem1BackLogs(e.target.value)}}/>
      </Form.Group>
      </Col> 
      </Row>


     <Row>
        <Col>
      <Form.Group  className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter Sem Percentage" onChange={(e)=>{setSem1Percent(e.target.value)}} />
      </Form.Group> 
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter Total CGPA" onChange={(e)=>{setSem1Cgpa(e.target.value)}}/>
      </Form.Group>
      </Col> 
      </Row>

      <Row>
        <Col>
        <h7 className='mt-3 '>Sem-2</h7>
        </Col>
      </Row>
      <Row>
        <Col>
      <Form.Group  className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter semester as Roman" onChange={(e)=>{setSem2(e.target.value)}} />
      </Form.Group> 
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter No.of backlogs"  onChange={(e)=>{setSem2BackLogs(e.target.value)}}/>
      </Form.Group>
      </Col> 
      </Row>
     <Row>
        <Col>
      <Form.Group  className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter Sem Percentage" onChange={(e)=>{setSem2Percent(e.target.value)}} />
      </Form.Group> 
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter Total CGPA" onChange={(e)=>{setSem2Cgpa(e.target.value)}} />
      </Form.Group>
      </Col> 
      </Row>

      <Row>
        <Col>
        <h7 className='mt-3 '>Sem-3</h7>
        </Col>
      </Row>
      <Row>
        <Col>
      <Form.Group  className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter semester as Roman"  onChange={(e)=>{setSem3(e.target.value)}} />
      </Form.Group> 
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter No.of backlogs" onChange={(e)=>{setSem3BackLogs(e.target.value)}} />
      </Form.Group>
      </Col> 
      </Row>
     <Row>
        <Col>
      <Form.Group  className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter Sem Percentage" onChange={(e)=>{setSem3Percent(e.target.value)}} />
      </Form.Group> 
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter Total CGPA" onChange={(e)=>{setSem3Cgpa(e.target.value)}} />
      </Form.Group>
      </Col> 
      </Row>

      <Row>
        <Col>
        <h7 className='mt-3 '>Sem-4</h7>
        </Col>
      </Row>

      <Row>
        <Col>
      <Form.Group  className="mb-3" controlId="formBasicPassword" >
        <Form.Control type="text" placeholder="Enter semester as Roman" onChange={(e)=>{setSem4(e.target.value)}} />
      </Form.Group> 
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter No.of backlogs" onChange={(e)=>{setSem4BackLogs(e.target.value)}} />
      </Form.Group>
      </Col> 
      </Row>
     <Row>
        <Col>
      <Form.Group  className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter Sem Percentage" onChange={(e)=>{setSem4Percent(e.target.value)}} />
      </Form.Group> 
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter Total CGPA" onChange={(e)=>{setSem4Cgpa(e.target.value)}} />
      </Form.Group>
      </Col> 
      </Row>




      <div className='d-flex justify-content-center mt-4'>
      <Button  style={{ backgroundColor:"#FF961F" ,fontSize:"22px",color:"blue"}} onClick={()=>handleSubmit()}>
        Submit
      </Button>
      </div>
    </Form>
    </div>
    // </div>
  );
}

export default Adim_academicdetails;