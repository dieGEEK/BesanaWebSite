import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  //   decreaseCart,
  delFromCart,
} from "../../actions/shoppingAction";
import { AxiosPost } from '../../api/axios'

import { addSponsor } from "../../actions/userActions"
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigation } from "../../components/navigation";
import { useParams } from "react-router-dom";
import getSymbolFromCurrency from 'currency-symbol-map'

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  let query = useQuery();
  const { cart } = state.shopping;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product.idProd));
  };
  const handleDecreaseCart = (product) => {
    dispatch(delFromCart(product.id));
  };
  const handleRemoveFromCart = (product) => {

    dispatch(delFromCart(product.id, true));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const mapCurrentFormat = ((ammont) => {
    let currencyFomrat = localStorage.getItem('currency') ?? 'USD'
    return getSymbolFromCurrency(currencyFomrat) + ammont
  })

  const handleClick = async () => {
    var spon = true;
    while (spon) {
     let sponsor = validateSponsor()
     const param={
      sponsor:sponsor
     }
    var response = await AxiosPost('Sponsor', param);
    console.log(response.data.mensaje)

     response.data.mensaje === 'yes' ? spon=false : alert('Sponsor No Existe!!, Intente de nuevo.');
    }
    dispatch(addSponsor(response))

    navigate("/confirmPayment");

  }

  const validateSponsor = () => {
    let sposorName = query.get("sponsor");
    console.log(sposorName)
    while (sposorName === null || sposorName === "" || sposorName === "null") {
      sposorName = prompt("Please enter sponsor Name:")
    }
    return sposorName
  }

  return (
    <>
      <Navigation style={{ backgroundColor: "#ffffff" }} />
      <div className="cart-container">
        <h2>Shopping Cart </h2>
        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
            <div className="start-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart &&
                cart.map((cartItem) => (
                  <div className="cart-item" key={cartItem.idProd}>
                    <div className="cart-product">
                      <img src={`/img/portfolio/${cartItem.img}`} alt={cartItem.name} />
                      <div>
                        <h3>{cartItem.name}</h3>
                        <button
                          onClick={() => handleRemoveFromCart(cartItem)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart-product-price">
                      {mapCurrentFormat(cartItem.price)}
                    </div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem.quantity}</div>
                      <button onClick={() => handleAddToCart(cartItem)}>
                        +
                      </button>
                    </div>
                    <div className="cart-product-total-price">
                      {mapCurrentFormat(cartItem.price * cartItem.quantity)}
                    </div>
                  </div>
                ))}
            </div>
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => handleClearCart()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">

                    {mapCurrentFormat(cart.reduce(
                      (partialSum, a) =>
                        partialSum + a.price * a.quantity,
                      0
                    ).toFixed(2))}
                  </span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button onClick={handleClick}>Check out</button>
                <div className="continue-shopping">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;







