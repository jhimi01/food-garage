import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
// import './CheckoutForm.css'

const Checkoutform = ({ price, cart }) => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('')
  const {user} =useAuth()

  useEffect(() => {
   if (price > 0) {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
   }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    console.log(card);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    setProcessing(true)

   const {paymentIntent, error:confirmError} = await  stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'unknow',
          name: user?.displayName || 'anonymous',
        },
      },
    });

    if (confirmError) {
      setCardError(confirmError)
    }
    console.log(paymentIntent)
    setProcessing(false)

    if(paymentIntent.status === "succeeded"){
      setTransactionId(paymentIntent.id)
     const payment = {
      email: user?.email,
      transactionId : paymentIntent.id,
      price,
      date: new Date(),
      quantity : cart.length,
      cartItems: cart.map(item => item._id),
      menuItems: cart.map(item => item.foodId),
      status: 'service pending',
      itemName: cart.map(item => item.name),
     }
     axiosSecure.post('/payment', payment)
     .then(res => {
      console.log(res.data)
      if (res.data.result.insertedId) {     
         Swal.fire('inserted')
      }
     })
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-active"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionId && <p className="text-green-600">transected succefully with {transactionId}</p>}
    </>
  );
};

export default Checkoutform;
