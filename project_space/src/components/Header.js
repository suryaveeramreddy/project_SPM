
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header_css.css";
function Header()
{
    return(
        <div className='head'>
            <div className='head_row row'>
                <img src="student_logo_new.png" className='col-md-1 head_img'></img>
                <h4 className='col-md-3 head_text'>Profile Management System</h4>
            </div>
        </div>
    )
}
export default Header;