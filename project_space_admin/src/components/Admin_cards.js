import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header_css.css";
function Admin_cards()
{
    
    return(
        <div className="Cards_body row mt-5 mr-3">
            <div className='col-md-3 card_body'>
                <div className="card1">
                    <h3><Link to="/register"  className="link">Register</Link></h3>
                </div>
            </div>
            <div className='col-md-3 card_body'>
                <div className="card2">
                    <h3><Link to="/academic"  className="link">Academic Details</Link></h3>
                </div>
            </div>
            <div className='col-md-3 card_body'>
                <div className="card2">
                    <h3><Link to="/certification"  className="link">Certifications</Link></h3>
                </div>
            </div>
            <div className='col-md-3 card_body'>
                <div className="card3">
                    <h3><Link to="/placement"  className="link">Placement Details</Link></h3>
                </div>
            </div>
            {/* <div className='col-md-3 card_body'>
                <div className="card4">
                    <h3><Link to="/attendence"   className="link">Attendence</Link></h3>
                </div>
            </div> */}
        </div>
    )
}
export default Admin_cards;