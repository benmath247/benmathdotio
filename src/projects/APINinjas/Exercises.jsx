import React, { Component } from 'react';
import axios from 'axios';

class Exercises extends Component {
  constructor() {
    super();
    this.state = {
      exerciseData: [], // Store the response data in state
      exerciseTypes: [], // Store exercise types
      muscleGroups: [], // Store muscle groups
      difficultyLevels: [], // Store difficulty levels
      selectedType: '', // Store selected exercise type
      selectedMuscle: '', // Store selected muscle group
      selectedDifficulty: '', // Store selected difficulty level
      exerciseName: '', // Store exercise name
    };
  }

  componentDidMount() {
    // Fetch data initially when the component mounts
    this.fetchExerciseData();
    this.fetchExerciseTypes();
    this.fetchMuscleGroups();
    this.fetchDifficultyLevels();
  }

  // Function to fetch exercise data based on selected parameters
  fetchExerciseData() {
    // Define the API key
    const apiKey = 'cP1TKlvcDX/LLMcD5hHjKw==E5SrJvJtMhSJ8sRm';

    // Define the parameters based on selected dropdown values and exercise name
    const { selectedType, selectedMuscle, selectedDifficulty, exerciseName } = this.state;
    const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=${selectedMuscle}&type=${selectedType}&difficulty=${selectedDifficulty}&name=${exerciseName}`;

    // Make the Axios GET request with headers
    axios.get(apiUrl, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then(response => {
        // Set the response data in the state
        this.setState({ exerciseData: response.data });
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
  }

  // Function to fetch exercise types
  fetchExerciseTypes() {
    // Define exercise types
    const exerciseTypes = [
      'cardio',
      'olympic_weightlifting',
      'plyometrics',
      'powerlifting',
      'strength',
      'stretching',
      'strongman',
    ];

    this.setState({ exerciseTypes });
  }

  // Function to fetch muscle groups
  fetchMuscleGroups() {
    // Define muscle groups
    const muscleGroups = [
      'abdominals',
      'abductors',
      'adductors',
      'biceps',
      'calves',
      'chest',
      'forearms',
      'glutes',
      'hamstrings',
      'lats',
      'lower_back',
      'middle_back',
      'neck',
      'quadriceps',
      'traps',
      'triceps',
    ];

    this.setState({ muscleGroups });
  }

  // Function to fetch difficulty levels
  fetchDifficultyLevels() {
    // Define difficulty levels
    const difficultyLevels = ['beginner', 'intermediate', 'expert'];

    this.setState({ difficultyLevels });
  }

  // Function to handle dropdown value changes
  handleDropdownChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      // Fetch data after dropdown value changes
      this.fetchExerciseData();
    });
  }

  // Function to handle exercise name input change
  handleExerciseNameChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      // Fetch data after exercise name input changes
      this.fetchExerciseData();
    });
  }

  render() {
    // Extract the exercise data and dropdown values from state
    const { exerciseData, exerciseTypes, muscleGroups, difficultyLevels, exerciseName } = this.state;

    return (
      <div className="container">
        <h1 className="mt-4 mb-4">Exercises Encyclopedia</h1>
        <div className="form-row mb-4">
        <div className='container'>
            Search for exercises by name, or filter by muscle group, difficulty level, or type of exercise.
        </div>
          <div className="col">
            <input
              type="text"
              name="exerciseName"
              value={exerciseName}
              className="form-control"
              placeholder="Search by Exercise Name (Optional)"
              onChange={this.handleExerciseNameChange}
            />
          </div>
          <div className="col">
            <select
              name="selectedType"
              className="form-control"
              onChange={this.handleDropdownChange}
            >
              <option value="">Select Type (Optional)</option>
              {exerciseTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <select
              name="selectedMuscle"
              className="form-control"
              onChange={this.handleDropdownChange}
            >
              <option value="">Select Muscle (Optional)</option>
              {muscleGroups.map((muscle, index) => (
                <option key={index} value={muscle}>
                  {muscle}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <select
              name="selectedDifficulty"
              className="form-control"
              onChange={this.handleDropdownChange}
            >
              <option value="">Select Difficulty (Optional)</option>
              {difficultyLevels.map((difficulty, index) => (
                <option key={index} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Equipment</th>
              <th>Difficulty</th>
              <th>Instructions</th>
            </tr>
          </thead>
          <tbody>
            {exerciseData.map((exercise, index) => (
              <tr key={index}>
                <td>{exercise.name}</td>
                <td>{exercise.type}</td>
                <td>{exercise.equipment}</td>
                <td>{exercise.difficulty}</td>
                <td>{exercise.instructions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Exercises;
