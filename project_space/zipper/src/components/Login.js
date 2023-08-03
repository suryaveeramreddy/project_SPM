import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login() {

   const navigate = useNavigate();
    const [students,SetStudents] = useState([])
 
    const BACKEND_URL = "http://localhost:8009/authentication";
    useEffect(()=>{
      axios.get(BACKEND_URL).then((res)=>{SetStudents(res.data) ;SetStudents(res.data); console.log(res.data)})
    },[]) 
    
    let name ="";
    let password="";
   

    for(let i=0;i<students.length;i++){
      console.log(students[i])
    }
    let verify=(nn,pp)=>{
         
      for(let i=0;i<students.length;i++){
        if(students[i].username===nn && students[i].password===pp){
          localStorage.setItem('token',students[i].username)
      
          console.log("nav")
          navigate(`/home`)
        }
        
        
      } 
        
   }
  return (
    <>
    <div className='Login'>
      <section>
  <div className=" d-flex align-items-center ">
    <div className="container ">
      <div className="row ">
</div>
    <div className="col-md-12 d-flex justify-content-center align-items-center mt-2 ">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div >
          <div className="card d-flex justify-content-center align-items-center mt-1" style={{background:"transparent",border:"none"}}>
            <div className="card-img d-flex justify-content-center align-items-center">
            <img src="./login_logo_12.png "class="img-fluid" style={{height:"200px"}}  />
            </div>
            <div className="card-body p-5 col-11 mb-5" style={{background:"rgb(179, 247, 179)",borderRadius:"20px"}}>
              <form>
                <div className="form-outline mb-4">
                <label className="form-label" for="form3"><b>UserName</b></label>
                  <input type="email" required placeholder="username"className="form-control form-control-lg" onChange={(e)=>{name=e.target.value}} />
                </div>
                <div className="form-outline mb-4">
                <label className="form-label"  for="form3"><b>Password</b></label>
                  <input type="password" placeholder="password" required className="form-control form-control-lg" onChange={(e)=>{password=e.target.value}} />
                  <div class="row"><a href="#"  className="pass_text mt-2" style={{ textDecoration: "none" }}>Forgot password?</a></div>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button"
                    className="btn  btn-block btn-lg  text-body" onClick={()=>verify(name,password)} style={{ backgroundColor:"#FF961F" ,fontSize:"22px"}}>Login</button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>
    </div>
    </>
  )
}

export default Login;
// body{
//   background-image:  url("https://www.yudiz.com/codepen/animation-form/banner.jpg");
//   background-size: cover;
//   background-position: center;
// }
// .pass_text:hover{
//       color:blue;
//       transition: 1s;
// }