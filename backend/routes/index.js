const express = require("express");
const userRouter = require("./user");
const bookRouter = require("./book");

const router = express.Router();

router.use("/user", userRouter);
router.use("/book", bookRouter);

module.exports = router;
