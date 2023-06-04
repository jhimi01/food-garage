import { loadStripe } from "@stripe/stripe-js";
import ShareTitle from "../../../component/ShareTitle";
import Checkoutform from "./Checkoutform";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    return (
        <div className="w-full">
            <ShareTitle subheading={'Please Provide'} headig={'pAYMENT'}/>
            <div>
            <Elements stripe={stripePromise}>
            <Checkoutform></Checkoutform>
    </Elements>
            
            </div>
        </div>
    );
};

export default Payment;