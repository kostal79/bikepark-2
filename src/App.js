import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRouters from "./AppRouters";
import useGetAuth from './hooks/useGetAuth/useGetAuth';
import { setIsAuth, setUserId } from './redux/slices/authSlice';

function App() {
  const [isAuth,,userId] = useGetAuth();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(setIsAuth(isAuth));
      dispatch(setUserId(userId))
  }, [isAuth, userId, dispatch])
  return (
    <>
        <AppRouters />
    </>
  );
}

export default App;
