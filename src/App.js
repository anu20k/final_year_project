import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import Home from './components/Home' 
import HospitalHome from './components/hospital/Home.js';
import HospitalLogin from './components/hospital/Login';
import HospitalRegistration from './components/hospital/Registration';
import HospitalForgotpass from './components/hospital/Forgotpass.js';
import FetchPatientEmergencyRecord from './components/hospital/FetchPatientEmergencyRecord.js';
import FetchByFace from './components/hospital/FetchByFace.js';
import Patientinfo from './components/hospital/Patientinfo'
import Webcam1 from './components/hospital/FetchByFace.js'

import UserHome from './components/user/Home.js'
import UserLogin from './components/user/Login';
import UserRegistration from './components/user/Registration';

import DoctorHome from './components/doctor/Home.js'
import DoctorLogin from './components/doctor/Login';
import DoctorRegistration from './components/doctor/Registration';
import DoctorForgotpass from './components/doctor/Forgotpass.js';


function App() {
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hospital" element={<HospitalHome/>}></Route>
        <Route path="/hospital/auth/login" element={<HospitalLogin/>}></Route> 
        <Route path="/hospital/auth/registration" element={<HospitalRegistration/>}></Route>
        <Route path="/hospital/auth/forgotpass" element={<HospitalForgotpass />}></Route>
        <Route path="/hospital/fetchPatientEmergencyRecord" element={<FetchPatientEmergencyRecord/>}></Route>
        <Route path="/hospital/fetchPatientEmergencyRecord/face" element={<FetchByFace/>}></Route>

      
        <Route path="/hospital/patientinfo" element={<Patientinfo/>}></Route>
        <Route path="/user" element={<UserHome/>}></Route>
        <Route path="/user/auth/login" element={<UserLogin/>}></Route> 
        <Route path="/user/auth/registration" element={<UserRegistration/>}></Route>
        <Route path="/doctor" element={<DoctorHome/>}></Route>
        <Route path="/doctor/auth/login" element={<DoctorLogin/>}></Route> 
        <Route path="/doctor/auth/registration" element={<DoctorRegistration/>}></Route>
        <Route path="/doctor/auth/forgotpass" element={<DoctorForgotpass />}></Route>

      </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
