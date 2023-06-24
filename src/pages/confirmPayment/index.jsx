import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { AxiosPost } from '../../api/axios'
import StripeInput from '../../components/1.molecules/StripeInput'
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
} from "../../actions/shoppingAction";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Navigation } from "../../components/navigation";
import getSymbolFromCurrency from 'currency-symbol-map'
import { useState } from 'react';

const ConfirmPayment = () => {
  const [taxTotal, setTaxTotal] = useState({
    taxproducto:0,
    taxState:0,
    total:0,
    envio:0
  });
  // const [taxTotal, setTaxTotal] = useState(0);

  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const { cart } = state.shopping;
  const { sponsor } = state.user;
  const dispatch = useDispatch();
  const stripe = useStripe();
  const element = useElements();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
console.log(sponsor.data.data)
  const sponsorGet=sponsor.data.data;
  var total= cart.reduce(
    (partialSum, a) =>
      partialSum + a.price * a.quantity,
    0
  )
    console.log(total)

    cart.map((item) => {
      console.log(item)
      
    })

    const VerifarTax=(e)=>{
      e.preventDefault();
      console.log(e);
      let stateUp=e.target.value.toUpperCase();
      console.log('ver estado para tax')
      console.log(stateUp)
   
      if (stateUp==='NEVADA') {
          let sTotalTax =total*8.375/100;
          let taxN=Number(sTotalTax.toFixed(2));
          let sum=taxN+total+7;
          let TotalN=Number(sum.toFixed(2));
          setTaxTotal({
            taxproducto:taxN,
            taxState:8.375,
            total:TotalN,
            envio:7
          });
      
       

      }else{
          let sTotalTax =total;
          let taxN=Number(sTotalTax.toFixed(2));
          let sum=taxN+7;
          let TotalN=Number(sum.toFixed(2));
          setTaxTotal({
            taxproducto:taxN,
            taxState:0,
            total:TotalN,
            envio:7
          });
      }

      console.log('objeto tax')
      console.log(taxTotal)

   
      

      console.log(taxTotal)

    }
  

  const onSubmit = async (event) => {
//SACAR EL TAX
   
    console.log('vemos cuanto lleva tax');
   
    if (!stripe || !element) {
      return;
    }
   
    const result = await stripe.createToken(element.getElement(CardElement));
   
    if (result.token) {
      
      
      const OrdersModel = {
        user: {
          id: '',
          name: event.firstname,
          lastName: event.lastName,
          userName: sponsorGet,
          email: event.email,
          workPhone: event.phone,
          zipCode: event.zip,
          address: event.address,
          country: event.country,
          state: event.state,
          city: event.city,
        },
        producDetail: cart.map((item) => {
          let taxproduct = (item.price*taxTotal.taxState)/100;
          console.log(taxproduct);
          return {
            idProduct: item.idProd,
            nameProduct:item.name,
            price:item.price,
            taxProduct:taxproduct,
            quantityProduct: item.quantity,
            subtotal:item.price*item.quantity+taxproduct
          }
        }),
        tokenCard: result.token.id,
        BuyType: 'CREDIT_CAR',
        total:taxTotal.total,
        shipping:taxTotal.envio
      }
      var response = await AxiosPost('Buy', OrdersModel);
      console.log(response)
    dispatch(clearCart());
    navigate("/");
      

    } else {
      alert('Error: ' + result.error.message)
    }
  };

  const mapCurrentFormat = ((ammont) => {
    let currencyFomrat = localStorage.getItem('currency') ?? 'USD'
    return getSymbolFromCurrency(currencyFomrat) + ammont
  })


  return (
    <>
      <Navigation style={{ backgroundColor: "#ffffff" }} />
      <div class="paretContainer">
        <div class="rowConfirm">
          <div class="col-75">
            <div class="myContainer">
              <h2> Sponsor : {sponsorGet}</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="rowConfirm">
                  <div class="col-10">
                    <h3>Billing Address</h3>
                    <label for="fname">
                      Name:
                    </label>
                    <input
                      {...register("firstname", { required: true })}
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="Name"
                    />
                    {errors.firstname && (
                      <span class="error">This field is required</span>
                    )}
                    <br />
                    <label for="fname">
                      Last Name:
                    </label>
                    <input
                      {...register("lastName", { required: true })}
                      type="text"
                      id="lname"
                      name="lastName"
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <span class="error">This field is required</span>
                    )}
                    <br />
                    <label for="email">
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="text"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <span class="error">This field is required</span>
                    )}
                    <br />

                    <label for="phone">
                      Phone:
                    </label>
                    <input
                      {...register("phone", { required: true })}
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                    />
                    {errors.phone && (
                      <span class="error">This field is required</span>
                    )}
                    <br />
                    <label for="zip">Zip Code</label>
                    <input
                      {...register("zip", { required: true })}
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="10001"
                    />
                    {errors.zip && (
                      <span class="error">This field is required</span>
                    )}
                    <br />

                    <label for="adr">
                      Address:
                    </label>
                    <input
                      {...register("address", { required: true })}
                      type="text"
                      id="adr"
                      name="address"
                      placeholder="Address"
                    />
                    {errors.address && (
                      <span class="error">This field is required</span>
                    )}
                    <br />

                    <label for="country">
                      Country:
                    </label>
                    <input
                      {...register("country", { required: true })}
                      type="text"
                      id="country"
                      name="country"
                      placeholder="Country"
                    />
                    {errors.country && (
                      <span class="error">This field is required</span>
                    )}
                    <br />
                    <label for="state">State</label>
                    <input
                      {...register("state", { required: true })}
                      type="text"
                      id="state"
                      name="state"
                      placeholder="State"
                      onBlur={(e)=>VerifarTax(e) }
                    />
                    {errors.state && (
                      <span class="error">This field is required</span>
                    )}
                    <br />
                    <label for="city">
                      City:
                    </label>
                    <input
                      {...register("city", { required: true })}
                      type="text"
                      id="city"
                      name="city"
                      placeholder="City"
                    />
                    {errors.city && (
                      <span class="error">This field is required</span>
                    )}
                    <br />
                  </div>

                  <div class="col-50">
                    <h3>Payment</h3>
                    <div className="acceptedCards">
                      <label for="fname">Accepted Cards</label>
                      <div class="icon-container">
                        <i style={{ marginRight: "5px"}} class="fa fa-cc-visa"></i>
                        <i style={{ marginRight: "5px"}} class="fa fa-cc-amex"></i>
                        <i style={{ marginRight: "5px"}}class="fa fa-cc-mastercard"></i>
                        <i class="fa fa-cc-discover"></i>
                      </div>
                    </div>
                    <StripeInput></StripeInput>
                  </div>
                </div>

                <input
                  type="submit"
                  disabled={!stripe}
                  value="Confirm order"
                  className="btn"
                />
              </form>
            </div>
          </div>
          <div class="col-25">
            <div class="myContainer">
              <h4 class="price">
                Your order{" "}
                <span class="price">
                  <i class="fa fa-shopping-cart"></i> <b>{cart.length}</b>
                </span>
              </h4>
              {cart.map((item) => {
                return (
                  <p>
                    <a href="#">{item.name}</a>{" "}
                    <span class="price">
                      {mapCurrentFormat(item.price)} x </span>
                    <b>{item.quantity}</b>
                  </p>
                );
              })}
              
              <p class="price">Tax: {mapCurrentFormat(taxTotal.taxproducto)}</p>
              <p class="price">Envio: {mapCurrentFormat(taxTotal.envio.toFixed(2))}</p>


              <p>
                Total{" "}
                <span class="price">
                  <b>
                    {mapCurrentFormat(taxTotal.total)}
                    {/* {mapCurrentFormat(cart.reduce(
                      (partialSum, a) =>
                        partialSum + a.price * a.quantity,
                      0
                    ))} */}

                  </b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmPayment;