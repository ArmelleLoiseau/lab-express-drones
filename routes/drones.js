const express = require("express");
const { create } = require("./../models/Drone.model");
const router = express.Router();
const droneModel = require("./../models/Drone.model");

// require the Drone model here
// this route is not prefixed

router.get("/drones", (req, res, next) => {
  droneModel
    .find()
    .then((drones) => {
      console.log(drones);
      res.render("drones/list.hbs", {
        drones,
      });
    })
    .catch((e) => console.log(e));
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const createdDrone = await droneModel.create(req.body);
    res.redirect("/drones");
  } catch (e) {
    console.error(e);
    next();
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
  try {
    console.log("the drone to be edited is:", req.params);
    const droneToEdit = await droneModel.findById(req.params.id);
    console.log(droneToEdit);
    res.render("drones/update-form.hbs", { droneToEdit });
  } catch (e) {
    console.error(e);
    next();
  }
});

router.post("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const editedDrone = await droneModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.redirect("/drones");
  } catch (e) {
    console.error(e);
    next();
  }
});

router.get("/drones/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const deletedDrone = await droneModel.findByIdAndDelete(req.params.id);
    console.log(deletedDrone);
    res.redirect("/drones");
  } catch (e) {
    console.error(e);
    next();
  }
});

module.exports = router;
