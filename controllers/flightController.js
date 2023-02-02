exports.add_flight = (req,res) => {
   res.render("addFlight.ejs",{
      title: "Add Flight"
   })
}

exports.my_flight = (req,res) => {
   res.render("myFlights.ejs",{
      title: "My Flight"
   })
}

