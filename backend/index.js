const express = require("express");
require("./db/connection");
const user = require("./db/user");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.post("/register", async (req, resp) => {
  let USer = new user(req.body);
  let result = await USer.save();
  resp.send(result);
  // resp.send(req.body)
});

app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let User = await user.findOne(req.body).select("-password");
    if (User) {
      resp.send(User);
    } else {
      resp.send({ result: "No user Found" });
    }
  } else {
    resp.send({ result: "No user Found" });
  }
});
app.get("/", function (req, resp) {
  resp.send("App running");
});

app.listen(5000);
