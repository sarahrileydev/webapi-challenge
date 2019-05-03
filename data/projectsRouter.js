const express = require("express");
const Projects = require("./helpers/projectModel");
const router = express.Router();

// get projects
router.get("/", async (req, res) => {
  try {
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "The projects information could not be retrieved." });
  }
});

module.exports = router;