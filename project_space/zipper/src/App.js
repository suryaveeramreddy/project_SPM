import Header from './components/Header';
import Welcome_details from './components/Welcome_details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Placements from './components/Placements';
import Placement from './components/Placement';
import Academics from './components/Academics';
import Certification from './components/Certification';
import Login from './components/Login';
import Attendance from './components/Attendance';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header/>
        <Routes>
        <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Welcome_details />}/>
          <Route path="/home/:id" element={<Welcome_details />}/>
          <Route path="/placement" element={<Placements />}/>
          <Route path="/academic_details" element={<Academics />}/>
          <Route path="/certification" element={<Certification />}/>
          <Route path="/attendence" element={<Attendance />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
