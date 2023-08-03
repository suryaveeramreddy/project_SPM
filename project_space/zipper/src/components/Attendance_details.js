import {  Card, Col, Container, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideBar from './Slidebar';
import { useEffect, useState } from 'react';

import '../index.css';
import axios from 'axios';
function Attendance_details() {
 
  
  console.log(localStorage.getItem('token')+"from attendence")
 
    const [data,setData] = useState([])

    useEffect(()=>{
      axios.get("http://localhost:8009/attendence_details").then((res)=>{
             for(let i=0;i<res.data.length;i++){
                  if(res.data[i].username===localStorage.getItem('token')){
                     console.log(res.data[i].att_details)
                     setData(res.data[i].att_details)
                      break;
                  }
             }
      })
    },[])
  return (
    <Container style={{border:"2px solid black"}} fluid={true}>
      <SlideBar />
      
      <Row className='mt-5'style={{padding:"20px",marginLeft:"35px"}}>
         <Col>
            <div>
                   <Card className='mb-3 card12' style={{width:"70%",height:"80%",background:"purple",color:"white"}}>
                        <Card.Body >
                          <Card.Title className='mt-3 attendence' style={{textAlign:"center"}}>
                            Attendence
                          </Card.Title>
                          <Card.Text style={{textAlign:"center"}} className='attendence_val'>
                             82%
                          </Card.Text>
                        </Card.Body>
                   </Card>
            </div>
         </Col>
         
         <Col>
            <div >
                   <Card className='mb-3 card12'style={{width:"70%",height:"80%",background:"blue",color:"white"}} >
                        <Card.Body>
                          <Card.Title className='mt-3 sessions' style={{textAlign:"center"}}>
                            Sessions
                          </Card.Title>
                          <Card.Text style={{textAlign:"center"}} className='sessions_val'>
                             37/45
                          </Card.Text>
                        </Card.Body>
                   </Card>
            </div>
         </Col>
      </Row>
      <Row style={{marginTop:"2rem"}}>
        <Col>
           <div className='p-5'>
          <Table striped bordered hover responsive={true} border={0} className='attendence_table_css'>
             <thead>
                <tr style={{background:"black",color:"white"}}>
                    <th>S.No</th>
                    <th>Subject Name</th>
                    <th>Classes Conducted</th>
                    <th>Classes Attented</th>
                    <th>Percentage</th>

                </tr>
             </thead>
             <tbody>
               {
                //parseFloat(ele.classes_attended/ele.classes_held*100).toFixed(2);
                data.map((ele,i)=>{
                  return <tr>
                     <td >{i+1}</td>
                     <td>{ele.subject}</td>
                     <td>{ele.classes_held}</td>
                     <td>{ele.classes_attended}</td>
                     <td>{parseFloat(ele.classes_attended/ele.classes_held*100).toFixed(2)}</td>
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

export default Attendance_details;