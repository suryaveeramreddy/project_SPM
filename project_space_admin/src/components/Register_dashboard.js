import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Register from './Register';


function Register_dashboard() {
    return (
        <div className='dash'>
            <nav className="nav1" >
                <ul type='none' >
                    <li><Link to="/" className="link1">Home</Link> </li>
                    <li><Link to="/register" className="link1">Register</Link> </li>
                    <li><Link to="/academic" className="link1">Academics</Link></li>
                    <li><Link to="/certification" className="link1">Certifications</Link></li>
                    <li><Link to="/attendence" className="link1">Attendance</Link></li>
                    <li><Link to="/placement" className="link1">Placements</Link></li>
                </ul>
            </nav>
            <Register/>
        </div>
    )
}

export default Register_dashboard;