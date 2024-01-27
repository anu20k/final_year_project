import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HospitalRegistration from './components/HospitalRegistration';
import HospitalLogin from './components/HospitalLogin';
import HospitalHome from './components/HospitalHome.js';
import Userlogin from './components/Userlogin';
import UserRegistration from './components/UserRegistration';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Fetchpage from './components/Fetchpage';
import Fetchbyface from './components/Fetchbyface';
import Patientinfo from './components/Patientinfo'
import Webcam1 from './components/Webcam1'
import Home from './components/Home' 
import DoctorHome from './components/DoctorHome.js'
import UserHome from './components/UserHome.js'

function App() {
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hospital" element={<HospitalHome/>}></Route>
        <Route path="/hospital/auth/login" element={<HospitalLogin/>}></Route> 
        <Route path="/hospital/auth/registration" element={<HospitalRegistration/>}></Route>
        <Route path="/hospital/fetchpage" element={<Fetchpage/>}></Route>
        <Route path="/hospital/fetch_byface" element={<Fetchbyface/>}></Route>
        <Route path="/hospital/webcam" element={<Webcam1/>}></Route>
        <Route path="/hospital/patientinfo" element={<Patientinfo/>}></Route>
        <Route path="/user" element={<UserHome/>}></Route>
        <Route path="/doctor" element={<DoctorHome/>}></Route>
      </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
