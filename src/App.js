import Navbar from './component/Navbar';
import './App.css';
import Slider from './component/Slider';
import Cards from './component/Cards';
import Fund from './component/Fund';
import Orphanage_slider from './component/Orphanage_slider';
import Detail_intro from './component/Detail_intro';
import Result from './component/Result';
import Footer from './component/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Cards/>
      <Fund/>
      <Orphanage_slider/>
      <Detail_intro/>
      <Result/>
      <Footer/>
    </div>
  );
}

export default App;
