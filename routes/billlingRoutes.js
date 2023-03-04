const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
    // app.method accepts a sequence of arguments as middlewares, with eventual pair (req, res)
    app.post('/api/stripe', 
        requireLogin, 
        async (req, res) => {
        // request payload is parsed by body-parser and placed into .body
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });

        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
};