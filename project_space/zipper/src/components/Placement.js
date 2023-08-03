import {  Card, Col, Container, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideBar from './Slidebar';
import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import '../index.css';
import axios from 'axios';
function Placement() {
  
  console.log(localStorage.getItem('token') +" this your token");
   
    const [placementData, SetPlacementData] = useState([])
    const [number_of_placements,setNumber_of_placements]= useState(0)
    const [placements_succeded,setplacements_succeded]= useState(0)
    const [hi_p,sethi_p]=useState(0);
    const [recent_company,setrecent_company]=useState(0);
     useEffect(()=>{
      axios.get("http://localhost:8009/placement_details").then((res)=>{
          let arr=[...res.data];
          arr.forEach((ele)=>{
              if(localStorage.getItem('token')===ele.username){
                console.log(ele.placements+" state placement data ")
                SetPlacementData(ele.placements)
                setNumber_of_placements(ele.no_of_placements)
                setplacements_succeded(ele.placements_succeded)
                sethi_p(ele.highest_package)
                setrecent_company(ele.recent_company);
              }
          })
      })
     },[])

  return (
    <Container style={{border:"2px solid black"}} fluid={true}>
      <SlideBar />
      <Row className='mt-5'style={{padding:"20px",marginLeft:"35px"}}>
         <Col>
            <div>
                   <Card className='mb-3 card12' style={{width:"70%",height:"80%",background:"red",color:"white"}}>
                        <Card.Body >
                          <Card.Title className='mt-3' style={{textAlign:"center"}}>
                            Number Of Placements
                          </Card.Title>
                          <Card.Text style={{textAlign:"center"}}>
                             the number of Placements taken {number_of_placements}
                          </Card.Text>
                        </Card.Body>
                   </Card>
            </div>
         </Col>
         
         <Col>
            <div >
                   <Card className='mb-3 card12'style={{width:"70%",height:"80%",background:"green",color:"white"}} >
                        <Card.Body>
                          <Card.Title className='mt-3' style={{textAlign:"center"}}>
                            Succesfull Placements
                          </Card.Title>
                          <Card.Text style={{textAlign:"center"}}>
                             the number of  sucessfull Placements taken {placements_succeded}
                          </Card.Text>
                        </Card.Body>
                   </Card>
            </div>
         </Col>
      </Row>
      <Row className='mt-5'style={{padding:"20px",marginLeft:"35px"}}>
         <Col>
            <div>
                   <Card className='mb-3 card12' style={{width:"70%",height:"80%",background:"orange",color:"white"}}>
                        <Card.Body >
                          <Card.Title className='mt-3' style={{textAlign:"center"}}>
                            Highest Package
                          </Card.Title>
                          <Card.Text style={{textAlign:"center"}}>
                             {hi_p}
                          </Card.Text>
                        </Card.Body>
                   </Card>
            </div>
         </Col>
         
         <Col>
            <div >
                   <Card className='mb-3 card12'style={{width:"70%",height:"80%",background:"black",color:"white"}} >
                        <Card.Body>
                          <Card.Title className='mt-3' style={{textAlign:"center"}}>
                            Recent Company
                          </Card.Title>
                          <Card.Text style={{textAlign:"center"}}>
                             {recent_company}
                          </Card.Text>
                        </Card.Body>
                   </Card>
            </div>
         </Col>
      </Row>
      <Row >
        <Col>
           <div className='p-5'>
          <Table striped bordered hover responsive={true} className='placement_table'>
             <thead>
                <th>S. NO</th>
                <th>Comapany</th>
                <th>Salary</th>
                <th>Year/Month</th>
             </thead>
             <tbody>
               {
                placementData.map((ele,i)=>{
                 return <tr>
                    <td >{i+1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.Package}</td>
                    <td>{ele.year}</td>
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

export default Placement;