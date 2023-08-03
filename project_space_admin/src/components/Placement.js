import React from 'react'
import {Button,Form,Row,Col} from 'react-bootstrap';
// import './Adim_academicdetails.css';
import axios from 'axios';
import { useState } from 'react';
function Placements() {

    const [username, Setusername] = useState("");
    const [no_of_placements, Setno_of_placements] = useState("");
    const [placements_succeded, Setplacements_succeded] = useState("");
    const [highest_package, Sethighest_package] = useState("");
    const [recent_company,Setrecent_company] = useState("");
    const [place1_name,Setplace1_name] = useState("");
    const [place1_year,Setplace1_year] = useState("");
    const [place1_package,Setplace1_package] = useState("");
    const [place2_name,Setplace2_name] = useState("");
    const [place2_year,Setplace2_year] = useState("");
    const [place2_package,Setplace2_package] = useState("");
    const [place3_name,Setplace3_name] = useState("");
    const [place3_year,Setplace3_year] = useState("");
    const [place3_package,Setplace3_package] = useState("");

    function handleSubmit(){
      let obj = {
        username:username,
        no_of_placements:no_of_placements,
        placements_succeded:placements_succeded,
        highest_package:highest_package,
        recent_company:recent_company,
        placements:[
          {
            name:place1_name,
            Package:place1_package,
            year:place1_year
          },
          {
            name:place2_name,
            Package:place2_package,
            year:place2_year
          },
          {
            name:place3_name,
            Package:place3_package,
            year:place3_year

          },
        ]
      }
      console.log(obj)
   axios.post('http://localhost:8009/placement_details',{obj})
   .then(res=>console.log(res))
   .catch(err => console.log(err))

    }

  return (
    <div  className='d-flex justify-content-center' style={{height:"800px"}}>
    {/* <div className='d-flex justify-content-center '> */}
    <Form style={{marginLeft:"350px",marginTop:"20px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" onChange={(e)=>Setusername(e.target.value)}/>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicPassword">
        <Form.Label >Company</Form.Label>
        <Form.Control type="text" placeholder="Enter company" onChange={(e)=>Setplace1_name(e.target.value)}/>
      </Form.Group> 
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Package</Form.Label>
        <Form.Control type="text" placeholder="Enter Package" onChange={(e)=>Setplace1_package(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Year</Form.Label>
        <Form.Control type="text" placeholder="Enter Year" onChange={(e)=>Setplace1_year(e.target.value)}/>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicPassword">
        <Form.Label >Company</Form.Label>
        <Form.Control type="text" placeholder="Enter company" onChange={(e)=>Setplace2_name(e.target.value)}/>
      </Form.Group> 
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Package</Form.Label>
        <Form.Control type="text" placeholder="Enter Package" onChange={(e)=>Setplace2_package(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Year</Form.Label>
        <Form.Control type="text" placeholder="Enter Year" onChange={(e)=>Setplace2_year(e.target.value)}/>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicPassword">
        <Form.Label >Company</Form.Label>
        <Form.Control type="text" placeholder="Enter company" onChange={(e)=>Setplace3_name(e.target.value)}/>
      </Form.Group> 
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Package</Form.Label>
        <Form.Control type="text" placeholder="Enter Package" onChange={(e)=>Setplace3_package(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Year</Form.Label>
        <Form.Control type="text" placeholder="Enter Year" onChange={(e)=>Setplace3_year(e.target.value)} />
      </Form.Group>

      <Row>
        <Col>
      <Form.Group  className="mt-2" controlId="formBasicPassword">
      <Form.Label>No.of Placements</Form.Label>
        <Form.Control type="text" placeholder="Enter Placements " onChange={(e)=>Setno_of_placements(e.target.value)} />
      </Form.Group> 
      </Col>
      <Col>
      <Form.Group className="mt-2" controlId="formBasicPassword">
      <Form.Label>Successfullplacemets</Form.Label>
        <Form.Control type="text" placeholder="Enter count" onChange={(e)=>Setplacements_succeded(e.target.value)}/>
      </Form.Group>
      </Col> 
      </Row> 


      <Row>
        <Col>
      <Form.Group  className="mt-3" controlId="formBasicPassword">
      <Form.Label>HighestPackage</Form.Label>
        <Form.Control type="text" placeholder="Enter Package" onChange={(e)=>Sethighest_package(e.target.value)} />
      </Form.Group> 
      </Col>
      <Col>
      <Form.Group className="mt-3" controlId="formBasicPassword">
      <Form.Label>RecentCompany</Form.Label>
        <Form.Control type="text" placeholder="Enter Company" onChange={(e)=>Setrecent_company(e.target.value)}/>
      </Form.Group>
      </Col> 
      </Row> 


      <div className='d-flex justify-content-center mt-4'>
      <Button  style={{ backgroundColor:"#FF961F" ,fontSize:"22px",color:"blue"}} type="submit" onClick={()=>handleSubmit()}>
        Submit
      </Button>
      </div>
    </Form>
    </div>
    // </div>
  );
}

export default Placements;