'use client'
import { Inter } from '@next/font/google'
import SubCard, { Card5 } from './(Card)/page'
import Navb from './(navbar)/page'
import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './(payment)/page'
import { Button } from '@nextui-org/react'
import CryptoPayment from './(cryptoPayment)/page'
const s: any = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const inter = Inter({ subsets: ['latin'] })
const stripePromise = loadStripe(s)
export default function Home() {
  const [clientSecret, setClientSecret] = React.useState('')

  const appearance = {
    theme: 'stripe',
  }
  const options = {
    clientSecret,
    appearance,
  }
  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
      {/* <Button
        onClick={() => {
          // Create PaymentIntent as soon as the page loads
          fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: '1000' }),
          })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
        }}
      >
        Paynow
      </Button> */}
      <SubCard />
      {/* <Card5 /> */}
      {/* <CryptoPayment /> */}
    </div>
  )
}
