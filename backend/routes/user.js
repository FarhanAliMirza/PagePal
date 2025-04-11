const express = require("express");
const zod = require("zod");
const { User, Account } = require("../db");
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");

const router = express.Router();

const signupSchema = zod.object({
    name: zod.string(),
    mobileNumber: zod.number(),
    email: zod.string().email(),
    password: zod.string(),
    owner: zod.boolean(),
});

const signinSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
});
// signup
router.post("/signup", async (req, res) => {
    const body = req.body;
    const success = signupSchema.safeParse(body);
    if (!success) {
      return res.status(411).json({ message: "Invalid data" });
    }
  
    const user = await User.findOne({ email: body.email });
    if (user) {
      return res.status(411).json({ message: "User already exists" });
    }
  
    const dbUser = await User.create(body);
    const email = dbUser.email;
    const token = jwt.sign({ email: email }, JWT_SECRET);
    res.json({ message: "User created successfully", token: token });
  });
// signin
  router.post("/signin", async (req, res) => {
    const body = req.body;
    const success = signinSchema.safeParse(body);
    if (!success) {
      return res.status(411).json({ message: "Error while loggin in" });
    }
    const existingUser = await User.findOne({
      email: body.email,
      password: body.password,
    });
  
    if (existingUser) {
      const token = jwt.sign({ email: existingUser.email }, JWT_SECRET);
      res.json({ message: "User logged in successfully", token: token });
    } else return res.status(411).json({ message: "Error while logging in" });
  });
// get user data
  router.get("/", authMiddleware, async (req, res) => {
    try {
      const user = await User.findOne({ email: req.email });
      res.json({
        user: {
          email: user.email,
          name: user.name,
          mobileNumber: user.mobileNumber,
          owner: user.owner,
          exists: true,
        },});
    } catch {
      res.json({
        user: {
          exists: false,
        },
      });
    }
  });

module.exports = router;