const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter your workout type."
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter your workout name."
      },
      duration: {
        type: Number,
        required: "Please enter your workout duration."
      },
      weight: {
        type: Number,
        required: "Please enter the amount of weight you used in your workout.",
        default: 0
      },
      reps: {
        type: Number,
        required: "Please enter your workout reps.",
        default: 0
      },
      sets: {
        type: Number,
        required: "Please enter your workout sets.",
        default: 0
      },
      distance: {
        type: Number,
        required: "Please enter your workout distance.",
        default: 0
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;