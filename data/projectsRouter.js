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

//post project
router.post("/", async (req, res) => {
  try {
    const addProject = await Projects.insert(req.body);
    res.status(200).json({ message: "New project added successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error. Project was not added." });
  }
});

//update by ID
router.put("/:id", async (req, res) => {
  try {
    const project = await Projects.get(req.params.id);

    if (!project) {
      res.status(404).json({
        message:
          "Project not found."
      });
    } else {
      await Projects.update(req.params.id, req.body);
      res.json({ message: "Action updated" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server error."
    });
  }
});

//delete project
router.delete("/:id", async (req, res) => {
  try {
    const count = await Projects.remove(req.params.id);

    if (count > 0) {
      res.status(204).end();
    } else {
      res
        .status(404)
        .json({ message: "The project with the specified ID does not exist." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "The project could not be removed" });
  }
});

module.exports = router;
