import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import AppRouters from "./AppRouters";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import useGetAuth from './hooks/useGetAuth/useGetAuth';
import { setIsAuth, setUserId } from './redux/slices/authSlice';

function App() {
  const [isAuth,,userId] = useGetAuth();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(setIsAuth(isAuth));
      dispatch(setUserId(userId))
  }, [isAuth])
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
