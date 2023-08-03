import { Link } from 'react-router-dom';
import Det from './Det';
import "./Header_css.css";
function Cards(props)
{

    console.log(props.name)
    console.log(localStorage.getItem('token') +" from uighdwiy")
    return(
        <div className="Cards_body row">
            <div className='col-md-3 card_body'>
                <div className="card1">
                    <h3><Link to="/academic_details"  className="link">Academic Details</Link></h3>
                </div>
            </div>
            <div className='col-md-3 card_body'>
                <div className="card2">
                    <h3><Link to="/certification"  className="link">Certifications</Link></h3>
                </div>
            </div>
            <div className='col-md-3 card_body'>
                <div className="card3">
                    <h3><Link to="/placement"className="link">Placement Details</Link></h3>
                </div>
            </div>
            <div className='col-md-3 card_body'>
                <div className="card4">
                    <h3><Link to="/attendence"   className="link">Attendence</Link></h3>
                </div>
            </div>
        </div>
    )
}
export default Cards;