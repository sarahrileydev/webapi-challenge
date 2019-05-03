const express = require("express");
const Actions = require("./helpers/actionModel");
const router = express.Router();

// get actions
router.get("/", async (req, res) => {
  try {
    const actions = await Actions.get();
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "The actions information could not be retrieved." });
  }
});

module.exports = router;