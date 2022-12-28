
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Feedback from "./pages/Feedback";
import Home from './pages/Home';
import Rent from "./pages/Rent";
import WhereToRide from "./pages/WhereToRide";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/delivery" element={<Delivery />}></Route>
            <Route path="/feedback" element={<Feedback />}></Route>
            <Route path="/rent" element={<Rent />}></Route>
            <Route path="/wheretoride" element={<WhereToRide />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
