const express = require("express")
const router = express.Router()

const home_controller = require("../controllers/home")
const flight_controller = require("../controllers/flightController")

router.get("/", home_controller.home)

// flight form and create
router.get("/flight/create", flight_controller.flight_form_get)
router.post("/flight/create", flight_controller.flight_form_post)

// flight overview
router.get("/myflights", flight_controller.my_flight)

module.exports = router