import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdPassword } from "react-icons/md";
import { toast } from "react-toastify";
import Card from "../card/Card";
import { changePassword } from "../../services/authService";
import styles from "../../pages/auth/auth.module.scss";

const initialState = {
  oldPassword: "",
  password: "",
  password2: "",
};
const ChangePassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const { oldPassword, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const changePass = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      return toast.error("New password does not match");
    }
    const formData = {
      oldPassword,
      password,
    };

    const data = await changePassword(formData);
    toast.success(data);
    navigate("/profile");
  };
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <MdPassword size={35} color="#999" />
          </div>
          <h2>Change Password</h2>
          <form onSubmit={changePass} className="form-control">
            <input
              type="password"
              name="oldPassword"
              value={oldPassword}
              placeholder="Old Password"
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="New Password"
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password2"
              value={password2}
              placeholder="Confirm Password"
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="--btn --btn-primary --btn-block"
              style={{ marginBottom: "1rem" }}
            >
              Change Password
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default ChangePassword;
