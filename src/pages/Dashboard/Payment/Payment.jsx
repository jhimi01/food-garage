import { loadStripe } from "@stripe/stripe-js";
import ShareTitle from "../../../component/ShareTitle";
import Checkoutform from "./Checkoutform";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item)=> sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
            <ShareTitle subheading={'Please Provide'} headig={'pAYMENT'}/>
            <div>
            <Elements stripe={stripePromise}>
            <Checkoutform cart={cart} price={price}></Checkoutform>
    </Elements>
            
            </div>
        </div>
    );
};

export default Payment;