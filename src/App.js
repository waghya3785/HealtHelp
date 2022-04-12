import Navbar from './component/Navbar';
import './App.css';

import Team from './component/Team';
import {
  BrowserRouter as Router,
 
  Route,
  Routes,
 
} from "react-router-dom";
import Home from './component/Home';



function App() {
  return (
    <Router>
    <div>
      <Navbar/>
   
      <Routes>
      <Route path='/' element={<Home/>}/> 
      {/* <Route path='/Slider' element={<Slider/>}/>  */}

      <Route path='/Team' element={<Team/>}/> 

      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
