import React from 'react';
import './Dashboard.css';
import Det from './Det';
import { Link } from 'react-router-dom';
import SlideBar from './Slidebar';
import Placement from './Placement';
import Certifications_details from './Certifications_details';


function Certification() {
    return (
        <div className='dash'>
            <nav className="nav1" >
                <ul type='none' >
                    <li><Link to="/home" className="link1">Home</Link> </li>
                    <li><Link to="/academic_details" className="link1">Academics</Link></li>
                    <li><Link to="/certification" className="link1">Certifications</Link></li>
                    <li><Link to="/attendence" className="link1">Attendance</Link></li>
                    <li><Link to="/placement" className="link1">Placements</Link></li>
                    <li style={{background:"lightblue"}}><Link to="/" className="und"><p className='lk1' style={{color:"red"}}>Logout</p></Link></li>
                </ul>
            </nav>
            <Certifications_details/>
        </div>
    )
}

export default Certification;