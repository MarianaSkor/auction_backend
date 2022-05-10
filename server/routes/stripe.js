const router = require("express").Router();
const STRIPE_KEY =
  "sk_test_51Kxdo6JUWpyNDqSP4yBNKwc7pxZFc3uYHi9jlkOdtDjZYbjrwM6NF7myK2lZi9ceXfEEjokYymYEHmaigP1YDqdN00s922RPsc";
const stripe = require("stripe")(STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
