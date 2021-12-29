const express = require("express");
const dotenv = require("dotenv");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded());

dotenv.config({ path: ".config.env"});
require("./Connection/connection");

app.use(require("./Admin/routes/auth"));
app.use(require("./Dish/routes/getDish"));
app.use(require("./Dish/routes/setDish"));
app.use(require("./Place Order/routes/placeOrder"));

app.listen(port, () => {
    console.log("Server Started at "+port);
});