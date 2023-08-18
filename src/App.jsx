import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { loginStatus } from "./services/authService";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SET_LOGIN } from "./redux/features/auth/authSlice";

axios.defaults.withCredentials = true;
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getLoginStatus = async () => {
      const status = await loginStatus();
      dispatch(SET_LOGIN(status));
    };
    getLoginStatus();
  }, [dispatch]);
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default App;
