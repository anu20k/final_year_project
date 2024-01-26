import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HospitalRegistration from './components/HospitalRegistration';
import HospitalLogin from './components/HospitalLogin';
import Hospitalhome from './components/Hospitalhome';
import Userlogin from './components/Userlogin';
import UserRegistration from './components/UserRegistration';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Fetchpage from './components/Fetchpage';
import Fetchbyface from './components/Fetchbyface';
import Patientinfo from './components/Patientinfo'
import Webcam1 from './components/Webcam1'

function App() {
  return (
    <div>
       <Router>
      <Routes>
         <Route path="/" element={<HospitalLogin/>}></Route> 
         <Route path="/hospitalRegistration" element={<HospitalRegistration/>}></Route>
         <Route path="/hospitalhome" element={<Hospitalhome/>}></Route>
         <Route path="/fetchpage" element={<Fetchpage/>}></Route>
         <Route path="/fetch_byface" element={<Fetchbyface/>}></Route>
         <Route path="/webcam" element={<Webcam1/>}></Route>
         <Route path="/patientinfo" element={<Patientinfo/>}></Route>

         

         {/* user login */}
         {/* <Route path="/" element={<Userlogin/>}></Route>
         <Route path="/UserRegistration" element={<UserRegistration/>}></Route>
         <Route path="/hospitalhome" element={<Hospitalhome/>}></Route> */}
      </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
