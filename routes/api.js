const router = require("express").Router();
const WorkoutModel = require("../models/Workout");


//get workouts
router.get("/api/workouts", (req, res) => {
  WorkoutModel.Workout.find({}).then(dataSet => {
    dataSet.forEach(set => {
      let total = 0;
      set.exercises.forEach(e => {
          total += e.duration;
      });
      set.totalDuration = total;
    });
    res.json(WorkoutModel);
  }).catch(err => {
    res.json(err);
  });
});


router.get("/api/workouts/range", (req, res) => {
  WorkoutModel.Workout.find({}).then(dataSet => {
    res.json(dataSet);
  }).catch(err => {
    res.json(err);
  });
});


//create workout
router.post("/api/workouts", ({ body }, res) => {
  WorkoutModel.Workout.create(body).then((dataSet => {
    res.json(dataSet);
  }
  )).catch(err => {
    res.json(err);
  });
});

// add exercise
router.put("/api/workouts/:id", (req, res) => {
  WorkoutModel.Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body }
    },
    { new: true }).then(dataSet => {
        res.json(dataSet);
    }).catch(err => {
        res.json(err);
    });

});

module.exports = router;
