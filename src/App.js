import Navbar from './component/Navbar';
import './App.css';

import Team from './component/Team';
import {
  BrowserRouter as Router,
 
  Route,
  Routes,
 
} from "react-router-dom";
import Home from './component/Home';
import Footer from './component/Footer';
import How_it_works from './component/How_it_works';



function App() {
  return (
    <Router>
    <div>
      <Navbar/>
   
      <Routes>
      <Route path='/' element={<Home/>}/> 

      <Route path='/Team' element={<Team/>}/> 

      <Route path='/How_it_works' element={<How_it_works/>}/>

      
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
