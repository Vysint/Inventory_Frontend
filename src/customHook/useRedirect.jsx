import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_LOGIN } from "../redux/features/auth/authSlice";
import { loginStatus } from "../services/authService";
import { toast } from "react-toastify";

const useRedirect = (path) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const redirectLoggedOutUser = async () => {
      const isLoggedIn = await loginStatus();
      dispatch(SET_LOGIN(isLoggedIn));

      if (!isLoggedIn) {
        toast.info("Session expired, please login to continue");
        navigate(path);
        return;
      }
    };
    redirectLoggedOutUser();
  }, [navigate, path, dispatch]);
};

export default useRedirect;
