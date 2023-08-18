import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Forgot from "./pages/auth/Forgot.jsx";
import Reset from "./pages/auth/Reset.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Layout from "./components/layout/Layout.jsx";
import AddProduct from "./pages/addProduct/AddProduct.jsx";
import ProductDetail from "./components/product/productDetail/ProductDetail.jsx";
import EditProduct from "./pages/editProduct/EditProduct.jsx";
import Profile from "./pages/profile/Profile.jsx";
import EditProfile from "./pages/profile/EditProfile.jsx";
import Contact from "./pages/contact/Contact.jsx";
import ChangePassword from "./components/changePassword/ChangePassword.jsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<Forgot />} />
      <Route path="/resetpassword/:resetToken" element={<Reset />} />
      <Route path="changePassword" element={<ChangePassword />} />
      <Route
        path="/dashboard"
        element={
          <Sidebar>
            <Layout>
              <Dashboard />
            </Layout>
          </Sidebar>
        }
      />
      <Route
        path="/add-product"
        element={
          <Sidebar>
            <Layout>
              <AddProduct />
            </Layout>
          </Sidebar>
        }
      />
      <Route
        path="/product-detail/:id"
        element={
          <Sidebar>
            <Layout>
              <ProductDetail />
            </Layout>
          </Sidebar>
        }
      />
      <Route
        path="/edit-product/:id"
        element={
          <Sidebar>
            <Layout>
              <EditProduct />
            </Layout>
          </Sidebar>
        }
      />
      <Route
        path="/profile"
        element={
          <Sidebar>
            <Layout>
              <Profile />
            </Layout>
          </Sidebar>
        }
      />
      <Route
        path="/edit-profile"
        element={
          <Sidebar>
            <Layout>
              <EditProfile />
            </Layout>
          </Sidebar>
        }
      />
      <Route
        path="/contact_us"
        element={
          <Sidebar>
            <Layout>
              <Contact />
            </Layout>
          </Sidebar>
        }
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
