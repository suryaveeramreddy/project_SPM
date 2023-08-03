import './Header_css.css';
import Admin_cards from './Admin_cards';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Admin_welcome_details()
{
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
                       <div className='col-md-3'></div>
                        <div className='details_card col-md-6'>
                            <h4>Total number of students::----</h4>
                            <h4>Total number of FSD students::----</h4>
                            <h4>Total number of AWS students::----</h4>
                            <h4>Total number of ML students::----</h4>
                            <h4>Total number of AZURE students::----</h4>
                        </div>
                </div>
            </div>
            <Admin_cards/>
        </div>
    )
}
export default Admin_welcome_details;