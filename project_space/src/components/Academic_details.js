import {  Card, Col, Container, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideBar from './Slidebar';
import { useEffect, useState } from 'react';
import '../index.css';

import axios from 'axios';
function Academic_details(props) {
    
   
   console.log()
   const [placementData, SetPlacementData] = useState([])
   const [total_subjects,setTotal_subjects]= useState(0)
   const [total_backlogs,setTotal_backlogs]= useState(0)

   useEffect(()=>{
      axios.get('http://localhost:8009/academic_details').then((res)=> {
        console.log(res.data)
        for(let i=0;i<res.data.length;i++){
           
          if(res.data[i].username===localStorage.getItem('token')){
            
            console.log(res.data[i].aca_details)
            let arr = [];
            arr.push(res.data[i])
            SetPlacementData(res.data[i].aca_details);
            setTotal_subjects(res.data[i].total_subjects)
            setTotal_backlogs(res.data[i].backlogs)
          }
        }
      })
   },[])
   let sum =0;
     return (
    <Container style={{border:"2px solid black"}} fluid={true}>
      <SlideBar />
      <Row className='mt-5'style={{padding:"20px",marginLeft:"35px"}}>
         <Col>
            <div>
                   <Card className='mb-3 card12' style={{width:"70%",height:"80%",background:"lightgreen",color:"black"}}>
                        <Card.Body >
                          <Card.Title className='mt-3 total_subjects' style={{textAlign:"center"}}>
                            Total Subjects
                          </Card.Title>
                          <Card.Text style={{textAlign:"center"}} className='total_subjects_val'>
                             the number of Subjects taken {total_subjects}
                          </Card.Text>
                        </Card.Body>
                   </Card>
            </div>
         </Col>
         
         <Col>
            <div >
                   <Card className='mb-3 card12'style={{width:"70%",height:"80%",background:"red",color:"black"}} >
                        <Card.Body>
                          <Card.Title className='mt-3 total_backlogs' style={{textAlign:"center"}}>
                            Backlogs
                          </Card.Title>
                          <Card.Text style={{textAlign:"center"}} className='total_backlogs_val'>
                             the number of Backlogs {total_backlogs}
                          </Card.Text>
                        </Card.Body>
                   </Card>
            </div>
         </Col>
      </Row>
      <Row style={{marginTop:"2rem"}}>
        <Col>
           <div className='p-5'>
          <Table striped bordered hover responsive={true} className='academic_table'>
             <thead>
                <th>SEM</th>
                <th>PERCENTAGE</th>
                <th>CGPA</th>
                <th>BACKLOGS</th>
             </thead>
             <tbody>
               {
                placementData.map((ele,i)=>{
                {  
                  
                  return <tr>
                    <td >{ele.sem}</td>
                    <td>{ele.percentage}</td>
                    <td>{ele.cgpa}</td>
                    <td>{ele.backlogs}</td>
                  </tr>
                }
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

export default Academic_details;