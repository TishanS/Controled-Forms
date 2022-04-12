import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {


  const [validate, setValidate] = useState('')

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    courses: 'react',
    ref: '',
    error: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
    },
  }
  )

  const handleSubmit = async (e) => {
    // e.preventDefault();

    var errKey = Object.keys(state).filter((key) => {
      if (state[key] === '' && key != 'error') {
        return key;
      }
    });
    console.log(errKey);
    if (errKey.length >= 1) {
      setValidate("Enter all required fields")
      console.error('Fill all fields');
    }

    else {
      setValidate('')
      console.log(state);
    }

  };


  const handleChange = async (e) => {
    var error = { ...state.error };

    if (e.target.value === '') {
      error[e.target.name] = `${e.target.name} is required`;
    } else {
      error[e.target.name] = '';
    }
    await setState({ [e.target.name]: e.target.value, error });

    console.log(state);
  };

  return (

    <>
      <div style={{ padding: '10px', margin: '10px', backgroundColor: 'lightblue' }}>
        <h3>Controlled Forms!!! </h3>
        <form  onClick={(e) => handleSubmit(e)}>

          <div>
            <label>First Name </label>
            <input type="text" name='firstName'
              value={state.firstName}
              onChange={(e) => handleChange(e)}
            /> <br />
            <span style={{ color: 'red' }}>{state.error.firstName}</span> <br /> <br />
          </div>

          <div>
            <label>Last Name </label>
            <input type="text" name='lastName' value={state.lastName}
              onChange={(e) => handleChange(e)} />
            <br />
            <span style={{ color: 'red' }}>{state.error.lastName}</span> <br /> <br />
          </div>

          <div>
            <label>Email </label>
            <input type="text" name='email' value={state.email}
              onChange={(e) => handleChange(e)}
            /> <br />
            <span style={{ color: 'red' }}>{state.error.email}</span> <br /> <br />
          </div>

          <div>
            <label>Gender: </label>
            <input type="radio" name='gender' value="Male" onChange={(e) => handleChange(e)} /> Male
            <input type="radio" name='gender' value="Female" onChange={(e) => handleChange(e)} /> Female
          </div> <br />
          <div>
            <label>Courses: </label>
            <select name='courses'
              value={state.courses}
              onChange={(e) => handleChange(e)}>
              <option value="react">React </option>
              <option value="node">Node </option>
              <option value="mongo">Mongo</option>
            </select>
          </div> <br />

          <div>
            <button type='submit' >Submit</button> &nbsp; &nbsp; &nbsp; <br />
            <span style={{ color: 'red' }}>{validate}</span> <br /> <br />
          </div>
        </form>
      </div>

    </>

  );
}

export default App;
