const express = require("express");

const blogController = require("../controller/blog.controller");

const router = express.Router();

router.get("/", blogController.getHome);

router.get("/resume", blogController.getResume);

module.exports = router;