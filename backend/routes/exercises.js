const experss = require('express')
const router = experss.Router();

// Model 
let Exercise = require('../models/exercises.model.js');

// Get from database
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json("Error: " + err));
});


/** add new exercise */
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
  
    const newExercise = new Exercise({
      username,
      description,
      duration,
      date,
    });
  
    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

/** show details */
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json('Error: ' + err));
});

/** delete excercise */
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

/** udpate exercise */
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);
  
        exercise.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


/** export */
module.exports = router;
