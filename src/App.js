import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRouters from "./AppRouters";
import useGetAuth from './hooks/useGetAuth/useGetAuth';
import { setIsAuth, setUserId } from './redux/slices/authSlice';
import Loader from './components/Loader/Loader';

function App() {
  const [isAuth, isLoading, userId] = useGetAuth();
  const dispatch = useDispatch();
  console.log("App")

  useEffect(() => {
    dispatch(setIsAuth(isAuth));
    dispatch(setUserId(userId))
  }, [isAuth, userId, dispatch])


  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && <AppRouters />}
    </>
  );
}

export default App;
