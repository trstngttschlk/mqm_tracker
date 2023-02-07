const Flight = require('../models/flights')

exports.my_flight = (req,res) => {
   res.render("myFlights.ejs",{
      title: "My Flight"
   })
}

exports.flight_form_get = (req,res) => {
   res.render("flight_form.ejs",{
      title: "Add Flight"
   })
}

exports.flight_form_post = (req,res) => {

   const flight = new Flight({
      date: req.body.date,
      from: req.body.from,
      to: req.body.to,
      flight_number: req.body.flight_number,
      mqms: req.body.mqms,
   })

   flight.save()
      .then((result) => {
         res.redirect('/')
      })
}
