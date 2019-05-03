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

// get projects by ID
router.get("/:id", async (req, res) => {
  try {
    const project = await Projects.get(req.params.id);

    if (project) {
      res.status(200).json(project);
    } else {
      res
        .status(404)
        .json({ message: "The project with the specified ID does not exist." });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "The project information could not be retrieved." });
  }
});

module.exports = router;