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

// get actions by ID
router.get("/:id", async (req, res) => {
  try {
    const action = await Actions.get(req.params.id);

    if (action) {
      res.status(200).json(action);
    } else {
      res
        .status(404)
        .json({ message: "The action with the specified ID does not exist." });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "The action information could not be retrieved." });
  }
});

// post action
router.post("/", async (req, res) => {
  try {
    const addAction = await Actions.insert(req.body);
    res.status(200).json({ message: "New action added successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error. Action was not added." });
  }
});

// update actions by ID
router.put("/:id", async (req, res) => {
  try {
    const action = await Actions.get(req.params.id);

    if (!action) {
      res.status(404).json({
        message:
          "action not found."
      });
    } else {
      await Actions.update(req.params.id, req.body);
      res.json({ message: "Action updated" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server error."
    });
  }
});



//delete action
router.delete("/:id", async (req, res) => {
  try {
    const count = await Actions.remove(req.params.id);

    if (count > 0) {
      res.status(204).end();
    } else {
      res
        .status(404)
        .json({ message: "The action with the specified ID does not exist." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "The action could not be removed" });
  }
});

module.exports = router;
