import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'

function CheckoutForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) {
      return;
    }
    
    // Submit the PaymentElement
    const { error: submitError } = await elements.submit();
    if (submitError) {
      console.error(submitError.message);
      return;
    }

    // Fetch the payment intent client secret from the server
    const res = await fetch('/api/create-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount
      })
    });

    const secretKey = await res.json();
    console.log(secretKey);

    // Confirm the payment
    const { error } = await stripe.confirmPayment({
      clientSecret: secretKey,
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-confirm`
      }
    });

    if (error) {
      console.error(error.message);
    }
  }

  return (
    <div className='flex flex-col justify-center items-center w-full mt-6'>
      <h2 className='m-5 font-bold text-xl'>Total Amount: ${amount}</h2>
      <form onSubmit={handleSubmit} className='w-full max-w-md bg-white p-6 shadow-lg rounded-lg'>
        <PaymentElement className='w-full p-2 rounded-lg mt-2' />
        <button type='submit' className='w-full bg-[#FF5722] text-white p-3 rounded-lg mt-4 hover:bg-[#e65100] transition duration-200'>
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
