import React, {Component} from 'react'; 
import axios from 'axios';
import { Link } from 'react-router-dom'

const Exercises = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td className="text-right">
            <Link className="btn btn-primary btn-sm" to={"/edit/" + props.exercise._id} >Edit</Link>  
            <button className="btn btn-danger btn-sm" onClick={() => { props.deleteExercise(props.exercise._id) } }>Delete</button>
        </td>
    </tr>
)

class ExercisesList extends Component  {

    constructor (props) {
        super(props);
        
        this.state = {
            exercises: []
        };
    }

    // componentDidMount
    componentDidMount() {
        axios.get('http://localhost:5000/exercises')
            .then(response => {
                this.setState({
                    exercises: response.data,
                })
            })
            .catch (error => console.log(error));
    }

    
    

    /** Delete Exercise */
    deleteExercise = id => {
        axios.delete('http://localhost:5000/exercises/'+id)
        .then(res => console.log(res.data))
        .catch(error => console.log(error));

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        });
    }


    /** List exercises */
    exercisesLIst() {
        return this.state.exercises.map(currentExercise => {
            return <Exercises exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id} />
        });
    }

    render() {  
        return (
            <div className="container">
                <h3 className="py-2 mt-3">Logged Exercises</h3>
                <table className="table mt-3">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exercisesLIst() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExercisesList;