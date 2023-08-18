import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRedirect from "../../../customHook/useRedirect";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/features/product/productSlice";
import Card from "../../card/Card";
import { SpinnerImg } from "../../loader/Loader";
import DOMPurify from "dompurify";
import "./ProductDetail.scss";

const ProductDetail = () => {
  useRedirect("/login");

  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { product, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  const stockStatus = (quantity) => {
    if (quantity > 0) {
      return <span className="--color-success">In Stock</span>;
    } else {
      return <span className="--color-danger">Out Of Stock</span>;
    }
  };

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProduct(id));
    }
    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, dispatch, message]);
  return (
    <div className="product-detail">
      <h3 className="--mt">Product Details</h3>
      <Card cardClass="card">
        {isLoading && <SpinnerImg />}
        {product && (
          <div className="detail">
            <Card cardClass="group">
              {product?.image ? (
                <img src={product.image.filePath} alt={product.image.fileName} />
              ) : (
                <p>No image set for this product</p>
              )}
            </Card>
            <h4>Product Availability: {stockStatus(product.quantity)}</h4>
            <hr />
            <h4>
              <span className="badge">Name: </span> &nbsp; {product.name}
            </h4>
            <p>
              <b>&rarr; SKU: </b> {product.sku}
            </p>
            <p>
              <b>&rarr; Category: </b> {product.category}
            </p>
            <p>
              <b>&rarr; Price: </b>
              {"$"}
              {product.price}
            </p>
            <p>
              <b>&rarr; Quantity in Stock: </b> {product.quantity}
            </p>
            <p>
              <b>&rarr; Total value in Stock: </b>
              {"$"}
              {product.price * product.quantity}
            </p>
            <hr />
            <br />
            <p>
              <b>&rarr; Description: </b>
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description),
              }}
            ></div>
            <br />
            <hr />
            <code className="--color-dark">
              Created on: {product.createdAt.toLocaleString("en-US")}
            </code>
            <br />
            <code className="--color-dark">
              Last Updated: {product.updatedAt.toLocaleString("en-US")}
            </code>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ProductDetail;
