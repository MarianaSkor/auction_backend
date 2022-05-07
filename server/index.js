const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://auction-admin:JiTTIonrDafr7HUe@cluster0.ulrvw.mongodb.net/auction?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => console.log(err));


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
