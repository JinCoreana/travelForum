const express = require("express");
const session = require("express-session");

const cors = require("cors");
const passport = require("passport");
const cookieParse = require("cookie-parser");
const dotenv = require("dotenv");

const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const db = require("./models");
const passportConfig = require("./passport");

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("db Connected");
  })
  .catch(console.error);

passportConfig();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParse(process.env.COOKIE_SECRET));
app.use(express.urlencoded({ extended: true })); //form data
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("Running server");
});
