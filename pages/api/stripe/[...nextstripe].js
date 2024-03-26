import NextStripe from 'types/next-stripe'

export default NextStripe({
    stripe_key: process.env.STRIPE_SECRET_KEY
})