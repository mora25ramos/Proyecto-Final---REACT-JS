import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { count } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <div className="cart-img">
        <img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" />
      </div>
      <div className="cart__count">
        <p>{count}</p>
      </div>
      <Link to="/cart"> Terminar compra</Link>
    </div>
  );
};
export default Cart;