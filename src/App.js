import './App.css';
import AppRouters from "./AppRouters";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {

  return (
    <>
      <div className="App">
        <Header />
        <AppRouters />
      </div>
      <Footer />
    </>
  );
}

export default App;
