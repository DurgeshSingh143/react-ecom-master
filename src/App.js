// import logo from "./logo.svg";
import "./App.css";
import CustomerRouters from "./Routers/CustomerRouters";
// import Checkout from "./customer/components/Checkout/Checkout";
// import Cart from "./customer/components/Cart/Cart";
// import Footer from "./customer/components/Footer/Footer";
// import Navigation from "./customer/components/Navigation/Navigation";
// import OrderDetails from "./customer/components/Order/OrderDetails";
// import Order from "./customer/components/Order/Order";
// import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
// import Product from "./customer/components/Product/Product";
// import HomePage from "./customer/pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
