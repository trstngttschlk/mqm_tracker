const express = require("express")
const router = express.Router()
const home_controller = require("../controllers/home")
const flight_controller = require("../controllers/flightController")

router.get("/", home_controller.home)
router.get("/addflight", flight_controller.add_flight)
router.get("/myflights", flight_controller.my_flight)

module.exports = router