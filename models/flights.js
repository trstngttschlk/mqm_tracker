const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const flightSchema = new Schema({
   date: {
      type: Date,
      default: Date.now,
      required: true,
   },
   from: {
      type: String,
      required: true,
   },
   to: {
      type: String,
      required: true,
   },
   flight_number: {
      type: String,
      required: true,
   },
   mqms: {
      type: Number,
      required: false,
   }
})

const Flight = mongoose.model('Flight', flightSchema)
module.exports = Flight
