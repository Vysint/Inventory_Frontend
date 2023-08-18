import { useState } from "react";
import { MdPassword } from "react-icons/md";
import Card from "../../components/card/Card";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../services/authService";
import styles from "./auth.module.scss";

const initialState = {
  password: "",
  password2: "",
};
const Reset = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(initialState);
  const { password, password2 } = userData;
  const { resetToken } = useParams();

  const handleInputChange = (e) => {
    setUserData((userData) => ({
      ...userData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      return toast.error("Passwords must be up to 6 characters");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userInfo = {
      password,
      password2,
    };

    try {
      const data = await resetPassword(userInfo, resetToken);
      toast.success(data.message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <MdPassword size={35} color="#999" />
          </div>
          <h2>Reset Password</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="New Password"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              name="password2"
              value={password2}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="--btn --btn-primary --btn-block"
              style={{ marginBottom: "1rem" }}
            >
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/">- Home</Link>
              </p>
              <p>
                <Link to="/login">- Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Reset;
