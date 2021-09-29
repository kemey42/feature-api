const express = require("express");
const router = express.Router();
const Feature = require("./models/Feature");

// GET all features
router.get("/features", async (req, res) => {
  console.log("Received GET /features request");
  const features = await Feature.find();
  res.status(200).send(features);
});

// POST feature
router.post("/feature", async (req, res) => {
  console.log("Received POST /feature request", req.body);
  try {
    const feature = new Feature({
      featureName: req.body.featureName,
      email: req.body.email,
      enable: req.body.enable,
    });
    await feature.save();
    res.status(200).send(feature);
  } catch (error) {
    console.log(error);
    res.status(304).send();
  }
});

// GET /feature?email=XXX&featureName=XXX)
router.get("/feature", async (req, res) => {
  console.log("Received GET /feature request", req.query);
  try {
    var inputEmail = req.query.email;
    var inputFeatureName = req.query.featureName;
    const document = await Feature.findOne(
      { featureName: inputFeatureName, email: inputEmail },
      { enable: 1 }
    );
    res.status(200).send(JSON.parse('{"canAccess":' + document.enable + "}"));
  } catch {
    res.status(404).send({ error: "Record not found!" });
  }
});

module.exports = router;
