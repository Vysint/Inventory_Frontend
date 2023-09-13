import axios from "axios";

// const BACKEND_URL = import.meta.env.VITE_REACT_API_URL;
// const API_URL = `${BACKEND_URL}/api/products`;
const PRODUCTS_URL = "https://inventory-vysint-api.onrender.com/api/products";

// Create new product

export const createNewProduct = async (formData) => {
  const response = await axios.post(PRODUCTS_URL, formData);
  return response.data;
};

// Get all Products
export const getAllProducts = async () => {
  const response = await axios.get(PRODUCTS_URL);
  return response.data;
};

// Delete a Product
export const deleteProductById = async (id) => {
  const response = await axios.delete(`${PRODUCTS_URL}/${id}`);
  return response.data;
};

// Update a Product

export const updateProductById = async (id, formData) => {
  const response = await axios.patch(`${PRODUCTS_URL}/${id}`, formData);
  return response.data;
};
// Get a single Product
export const getProductById = async (id) => {
  const response = await axios.get(`${PRODUCTS_URL}/${id}`);
  return response.data;
};