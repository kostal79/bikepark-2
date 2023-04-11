import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import ErrorPage from "./pages/ErrorPage";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import OrderPage from "./pages/OrderPage";
import Rent from "./pages/Rent";
import Rules from "./pages/Rules";
import WhereToRide from "./pages/WhereToRide";
import Account from "./pages/Account";
import { useSelector } from "react-redux";
import { getIsAuth } from "./redux/slices/authSlice";

const AppRouters = () => {
  const isAuth = useSelector(getIsAuth);
  if (!isAuth) {
    return (
      <Routes>
        <Route path="/bikepark-2" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/wheretoride" element={<WhereToRide />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/bikepark-2" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/wheretoride" element={<WhereToRide />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouters;
