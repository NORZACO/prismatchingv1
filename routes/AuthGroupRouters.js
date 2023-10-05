const express = require("express");
const jsend = require("jsend");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
router.use(jsend.middleware);
const AuthGroupServices = require("../services/AuthGroupServices");
const userService = new AuthGroupServices();


// GET ALL
router.get("/", async (req, res, next) => {
  try {
    const users = await userService.getAll();
    res.status(200).jsend.success({ " result": users });
  } catch (err) {
    res.status(500).jsend.fail({ result: err.message });
  }
});

// GET ONE
router.get("/:id", async (req, res, next) => {
  try {
    const user = await userService.getOne(req.params.id);
    res.status(200).jsend.success({ result: user });
  } catch (err) {
    res.status(500).jsend.fail({ result: err.message });
  }
});


// CREATE
router.post("/create", jsonParser, async (req, res, next) => {
  try {
    const user = await userService.Create(req.body.name);
    res.status(200).jsend.success({ result: user });
  } catch (err) {
    res.status(500).jsend.fail({ result: err.message });
  }
});

// UPDATE
router.put("/:id", jsonParser, async (req, res, next) => {
  try {
    const user = await userService.update(req.params.id, req.body);
    res.status(200).jsend.success({ result: user });
  } catch (err) {
    res.status(500).jsend.fail({ result: err.message });
  }
});


// module.exports = app => app.use('/api', router);

// export ejs
module.exports = router;
