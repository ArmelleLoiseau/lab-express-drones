// Iteration #1
const { model, Schema } = require("mongoose");

const droneSchema = Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
  picture: {
    type: String,
    default: `<i class="fa-solid fa-paper-plane"></i>`,
  },
});

const Drone = model("drones", droneSchema);

module.exports = Drone;
