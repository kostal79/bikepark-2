import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Delivery from "./pages/Delivery/Delivery";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Feedback from "./pages/Feedback/Feedback";
import Home from "./pages/Home/Home";
import OrderPage from "./pages/OrderPage/OrderPage";
import Rent from "./pages/Rent/Rent";
import Rules from "./pages/Rules/Rules";
import WhereToRide from "./pages/WhereToRide/WhereToRide";
import Account from "./pages/Account/Account";
import { useSelector } from "react-redux";
import { getIsAuth } from "./redux/slices/authSlice";
import OrderProcessed from "./pages/OrderProcessed/OrderProcessed";

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
        <Route path="/rent" element={<Home />} />
        <Route path="/wheretoride" element={<WhereToRide />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/error" element={<ErrorPage />} />
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
      <Route path="/processed" element={<OrderProcessed />} />
      <Route path="/account" element={<Account />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouters;
