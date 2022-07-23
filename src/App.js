import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CustomerSupport from './pages/CustomerSupport';
import Gear from './pages/Gear';
import Locations from './pages/Locations';
import Partnerships from './pages/Partnerships';
import PromosCoupons from './pages/PromosCoupons';
import SingleProduct from './pages/SingleProduct';
import TopPicks from './pages/TopPicks';
import WeeklyAd from './pages/WeeklyAd';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/CustomerSupport" exact element={<CustomerSupport />}></Route>
          <Route path="/Gear" exact element={<Gear />}></Route>
          <Route path="/Partnerships" exact element={<Partnerships />}></Route>
          <Route path="/promos-coupons" exact element={<PromosCoupons />}></Route>
          <Route path="/SingleProduct/:id" exact element={<SingleProduct />}></Route>
          <Route path="/TopPicks" exact element={<TopPicks />}></Route>
          <Route path="/WeeklyAd" exact element={<WeeklyAd />}></Route>
          <Route path="/Locations" exact element={<Locations />}></Route>
          <Route path="/Footer" exact element={<Footer />}></Route>
        </Routes>  
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
