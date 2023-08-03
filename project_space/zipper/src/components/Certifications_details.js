import {  Card, Col, Container, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideBar from './Slidebar';
import { useEffect, useState } from 'react';
import '../index.css';

import axios from 'axios';

function Certifications_details() {
  const [attempted,setAttemted]= useState();
  const [placementData, SetPlacementData] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:8009/certification_details').then((res)=>{
      for(let i=0;i<res.data.length;i++){
        if(res.data[i].username===localStorage.getItem('token')){
           console.log(res.data[i].certifications)
           SetPlacementData(res.data[i].certifications)
           setAttemted(res.data[i].no_of_certifications)
            break;
        }
   }
    })
  },[])
  // axios.get('http://localhost:8009/certification_details').then((res)=>SetPlacementData(res.data[0].certifications))
   console.log(localStorage.getItem('token')+" at my certification ")

  
  return (
    <Container style={{border:"2px solid black"}} fluid={true}>
      <SlideBar />
      <Row className='mt-5'style={{padding:"20px",marginLeft:"35px"}}>
         <Col>
            <div>
                   <Card className='mb-3 card12 no_of_certi' style={{width:"70%",height:"80%",background:"green",color:"white"}}>
                        <Card.Body >
                          <Card.Title className='mt-3' style={{textAlign:"center"}}>
                            Number Of Certifications
                          </Card.Title>
                          <Card.Text style={{textAlign:"center"}}>
                             the number of Certifications taken {attempted}
                          </Card.Text>
                        </Card.Body>
                   </Card>
            </div>
         </Col>
         
         <Col>
            <div >
                   <Card className='mb-3 card12 sucessfull_certi'style={{width:"70%",height:"80%",background:"orange",color:"white"}} >
                        <Card.Body>
                          <Card.Title className='mt-3' style={{textAlign:"center"}}>
                            Succesfull Certifications
                          </Card.Title>
                          <Card.Text style={{textAlign:"center"}}>
                             the number of  sucessfull Certifications taken {placementData.length}
                          </Card.Text>
                        </Card.Body>
                   </Card>
            </div>
         </Col>
      </Row>
      <Row className='mt-5'style={{padding:"20px",marginLeft:"35px"}}>
         <Col>
            <div>
                   <Card className='mb-3 card12 current_certi' style={{width:"70%",height:"80%",background:"black",color:"white"}}>
                        <Card.Body >
                          <Card.Title className='mt-3' style={{textAlign:"center"}}>
                            Current Certification
                          </Card.Title>
                          <Card.Text style={{textAlign:"center"}}>
                             MTA
                          </Card.Text>
                        </Card.Body>
                   </Card>
            </div>
         </Col>
         
         <Col>
            <div >
                   <Card className='mb-3 card12 curr_mentor'style={{width:"70%",height:"80%",background:"red",color:"white"}} >
                        <Card.Body>
                          <Card.Title className='mt-3' style={{textAlign:"center"}}>
                            Current Mentor
                          </Card.Title>
                          <Card.Text style={{textAlign:"center"}}>
                             NDP/SIM
                          </Card.Text>
                        </Card.Body>
                   </Card>
            </div>
         </Col>
      </Row>
      <Row style={{marginTop:"2rem"}}>
        <Col>
           <div className='p-5'>
          <Table striped bordered hover responsive={true} border={0} className='certification_table_css'>
             <thead>
                <th>certificate</th>
                <th>mentor</th>
                <th>date</th>
             </thead>
             <tbody>
               {
                placementData.map((ele,i)=>{
                 return <tr>
                    <td >{ele.name}</td>
                    <td>{ele.mentor}</td>
                    <td>{ele.date}</td>
                  </tr>
                })
               }
             </tbody>
          </Table>
          </div>
        </Col>
      </Row>
       
    </Container>
  );
}

export default Certifications_details;