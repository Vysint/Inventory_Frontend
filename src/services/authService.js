import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = import.meta.env.VITE_REACT_API_URL;

const USERS_URL = "https://inventory-vysint-api.onrender.com/api/users";

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${USERS_URL}/register`, userData);
    if ((response.statusText = "OK")) {
      toast.success("User Registered successfully");
    }
    return response.data;
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(message);
  }
};

// Email Validation
export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// Login User
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      `${USERS_URL}/login`,
      userData
    );
    if ((response.statusText = "OK")) {
      toast.success("Login successfully");
    }
    return response.data;
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(message);
  }
};

// Logout User

export const logoutUser = async () => {
  try {
    await axios.get(`${USERS_URL}/logout`);
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(message);
  }
};

// Forgot Password
export const forgotPassword = async (userData) => {
  try {
    const response = await axios.post(
      `${USERS_URL}/forgotpassword`,
      userData
    );
    toast.success(response.data.message);
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(message);
  }
};

// Reset Password
export const resetPassword = async (userData, resetToken) => {
  try {
    const response = await axios.put(
      `${USERS_URL}/resetpassword/${resetToken}`,
      userData
    );
    return response.data;
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(message);
  }
};

// Get Login Status
export const loginStatus = async (e) => {
  try {
    const response = await axios.get(`${USERS_URL}/loggedin`);
    return response.data;
  } catch (err) {
    (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(message);
  }
};

// Get user Profile
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${USERS_URL}/profile`);
    return response.data;
  } catch (err) {
    (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(err.message);
  }
};

// Update user Profile
export const updateUserProfile = async (userData) => {
  try {
    const response = await axios.patch(
      `${USERS_URL}/updateuser`,
      userData
    );
    return response.data;
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(message);
  }
};

// Change password
export const changePassword = async (userData) => {
  try {
    const response = await axios.patch(
      `${USERS_URL}/changepassword`,
      userData
    );
    return response.data;
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(message);
  }
};
