const chalk = require("chalk");
const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//next for sending GET request
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

//post the username and welcome
//if else
app.post("/", (req, res) => {
  //destructuring code
  /*const { username, password } = req.body;

   if (username === "vonn" && password === "1234") {
    res.send(`Welcome ${req.body.username}`);
  } else {
    res.send("Login Failed");
  } */
  if (
    req.body.username === "vonn" &&
    req.body.email === "vonn@gmail.com" &&
    req.body.password === "1234"
  ) {
    res.send(`Welcome ${req.body.username}`);
  } else {
    res.send("Login Failed");
  }
});

//create an express app that responds to GET req to

// app.get("/", (req, res) => {
//   res.send("Welcome to the page I call Home");
// });

app.get("/about", (req, res) => {
  res.json({ mug: "coffee" });
});
app.get("/contact", (req, res) => {
  res.send(__dirname);
});

app.listen(port, () => {
  console.log(chalk.redBright.bold(`Server Running on port: ${port}`));
});
