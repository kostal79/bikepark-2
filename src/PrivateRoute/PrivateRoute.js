import { useDispatch, useSelector } from "react-redux";
import { getIsAuth, getUserData } from "../redux/slices/authSlice";
import { Navigate } from "react-router-dom";
import { setPopupSignIn } from "../redux/slices/popupSlice";

export function PrivateRoute({role, children}) {
    const isAuth = useSelector(getIsAuth);
    const userData = useSelector(getUserData);
    const userRole = userData.role;
    const dispatch = useDispatch();

    if (isAuth) {
        if ((role && userRole === role) || (!role)) {
            return children
        } else if (role && userRole !== role) {
            return <Navigate to="/error" replace />
        } 
    } else {
        dispatch(setPopupSignIn(true))
        return <Navigate to="/" replace />

    }
}