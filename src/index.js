const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const routes = require("./routes/routs.js");
app.use(cors());

app.use(morgan("dev"));

// el servidor puede leer petciones post
app.use(express.json());
app.use(routes);

const port = 3000;
app.listen(port);
console.log("Server On Port ", port);
