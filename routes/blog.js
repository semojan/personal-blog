const express = require("express");

const blogController = require("../controller/blog.controller");

const router = express.Router();

router.get("/", blogController.getHome);

module.exports = router;