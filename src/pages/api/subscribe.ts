import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
    const session = await getSession({ req })
        
        const stripeCustomer = await stripe.customer.create({
            email: session.user.email,
            // metadata
        })

        const stripecheckoutSession = await stripe.checkout.session.create({
            custmer:stripeCustomer.id,
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items:[
                { price: 'price_1M2tRwEdu5U2PHevBf1BKvjz', quantity: 1}
            ],
            mode:'subcription',
            allow_promotion_code: true,
            success_url: process.env.STRIPE_SUCESSION_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL
        })
        return res.status(200).json({ sessionId: stripecheckoutSession.id })
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }
}