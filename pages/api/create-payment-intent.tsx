// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);



export default async function handler(req:any, res:any) {
  const { amount } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};