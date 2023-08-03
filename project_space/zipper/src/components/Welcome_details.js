import './Header_css.css';
import Cards from './Cards';
import { useEffect } from 'react';
import {useState} from 'react'
import FF from './images/20A91A0529.jpg'
import axios from 'axios';
function Welcome_details()
{
    const[name,setName]= useState("");
    const[branch,setBranch] = useState("");
    const[year,setYear] = useState("");
    const[Stream,setStream] = useState("");
    useEffect(()=>{
        axios.get('http://localhost:8009/authentication').then((res)=>
        {
            res.data.forEach(element => 
            {
                if(element.username===localStorage.getItem('token'))
                {
                    console.log(element.username+" this for re verification ")
                    setName(element.name)
                    setBranch(element.branch)
                    setYear(element.year)
                    setStream(element.stream)
                }
            });
        })
    },[])
    console.log(localStorage.getItem('token') +" uhqduaieowd")
    return(
        <div className='welcome_body'>
            <div className='container'>
                <div className='row'>
                    <h1 className='col-md-5'></h1>
                    <h2 className='welcome_text col-md-2'>Welcome</h2>
                </div>
            </div>
            <div className='container profile_body'>
                <div className='row'>
                    <h1 className='col-md-4'></h1>
                    <div className='col-md-3 profile_div'>
                        <img src='./20A91A0529.jpg' style={{borderRadius:"50%"}} width="200px"/>
                        <div className='details'>
                        <p className="name_val"><b>Name:</b> {name}</p>
                        <p className="branch_val"><b>Branch:</b> {branch}</p>
                        <p className="year_val"><b>Year:</b> {year}</p>
                        <p className="year_val"><b>Stream::</b> {Stream}</p>
                        </div>
                    </div>
                    <h1 className='col-md-4'></h1>
                </div>
                    <Cards data={localStorage.getItem('token')}/>
            </div>
        </div>
    )
}
export default Welcome_details;