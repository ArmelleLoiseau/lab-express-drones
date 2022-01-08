// Iteration #1
require("./../db/index");

const droneModel = require("./../models/Drone.model");

const drones = [
  {
    name: "Very expensive toy",
    propellers: 3,
    maxSpeed: 12,
    picture: `<i class="fa-solid fa-plane"></i>`,
  },
  {
    name: "For rich kids",
    propellers: 4,
    maxSpeed: 15,
    picture: `<i class="fa-solid fa-money-bill-1-wave"></i>`,
  },
  {
    name: "Takes nice videos",
    propellers: 5,
    maxSpeed: 18,
    picture: `<i class="fa-solid fa-video"></i>`,
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
