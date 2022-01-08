// Iteration #1
require("./../db/index");

const droneModel = require("./../models/Drone.model");

const drones = [
  {
    name: "Very expensive toy",
    propellers: 3,
    maxSpeed: 12,
  },
  {
    name: "For rich kids",
    propellers: 4,
    maxSpeed: 15,
  },
  {
    name: "Takes nice videos",
    propellers: 5,
    maxSpeed: 18,
  },
];

(async function createDrones() {
  try {
    console.log("I'm in the DB !");
    await droneModel.deleteMany();
    const inserted = await droneModel.create(drones);
    console.log(
      `success : ${inserted.length} drones in database ! Here they are : ${inserted}`
    );
    process.exit();
  } catch (e) {
    console.error(e);
  }
})();
