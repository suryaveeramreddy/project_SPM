
import Admin_welcome_details from './components/Admin_welcome_details';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Placements from './components/Academic_dashboard';
import Academic_dashboard from './components/Academic_dashboard';
import Placement_dashboard from './components/Placement_dashboard';
import Certification_dashboard from './components/Certification_dashboard';
import Register_dashboard from './components/Register_dashboard';
import Student_details from './components/Student_details';

function App() {
  return (
    <div className="App">
      <Header/>
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Admin_welcome_details />}/>
        <Route path="/register" element={<Register_dashboard />}/>
        <Route path="/academic" element={<Academic_dashboard />}/>
        <Route path="/placement" element={<Placement_dashboard />}/>
        <Route path="/certification" element={<Certification_dashboard />}/>
        <Route path="/attendence" element={<Student_details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
