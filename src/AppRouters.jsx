import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import ErrorPage from "./pages/ErrorPage";
import Feedback from "./pages/Feedback";
import Home from './pages/Home';
import OrderPage from "./pages/OrderPage";
import Rent from "./pages/Rent";
import Rules from "./pages/Rules";
import SignIn from "./pages/SignIn";
import WhereToRide from "./pages/WhereToRide";


const AppRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/wheretoride" element={<WhereToRide />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRouters