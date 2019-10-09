import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Navbar from './components/navbar.component.js';
import ExerciseList from './components/exercises-list.component.js';
import CreateExercise from './components/exercise-create.component.js';
import EditExercise from './components/exercise-edit.component.js';
import CreateUser from './components/user-create.component.js';
import Footer from './components/Footer.component.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={ExerciseList} />
      <Route path='/create' component={CreateExercise}  />
      <Route path='/edit/:id' component={EditExercise}  />
      <Route path='/user' component={CreateUser} />
      <Footer />
    </Router>
  );
}

export default App;
