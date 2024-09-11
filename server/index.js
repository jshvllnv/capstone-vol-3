const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json()); //use to access req.body
app.use(cors());

//Routes

//Register and Login

app.use("/auth", require("./routes/jwtAuthorization"));

app.listen(4000, () => {
  console.log(`server is running on PORT 4000`);
});
