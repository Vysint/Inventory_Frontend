import { useDispatch, useSelector } from "react-redux";
import useRedirect from "../../customHook/useRedirect";
import { useEffect } from "react";
import { getProducts } from "../../redux/features/product/productSlice";
import ProductList from "../../components/product/productList/ProductList";
import ProductSummary from "../../components/product/productSummary/ProductSummary";
import { toast } from "react-toastify";

const Dashboard = () => {
  useRedirect("/login");
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProducts());
    }
    if (isError) {
      toast.error(message);
      // console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);
  return (
    <div>
      <ProductSummary products={products} />
      <ProductList products={products} isLoading={isLoading} />
    </div>
  );
};

export default Dashboard;
