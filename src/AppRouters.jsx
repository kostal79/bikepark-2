import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Delivery from "./pages/Delivery/Delivery";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Feedback from "./pages/Feedback/Feedback";
import Home from "./pages/Home/Home";
import OrderPage from "./pages/OrderPage/OrderPage";
import Rules from "./pages/Rules/Rules";
import WhereToRide from "./pages/WhereToRide/WhereToRide";
import Account from "./pages/Account/Account";
import Layout from "./layouts/Layout";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import Admin from "./pages/Admin/Admin";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/rent" element={<Home />} />
        <Route path="/wheretoride" element={<WhereToRide />} />
        <Route path="/rules" element={<Rules />} />
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <OrderPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute >
              <Account />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute  role="moderator">
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouters;
