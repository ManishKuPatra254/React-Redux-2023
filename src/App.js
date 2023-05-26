

import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { configureStore } from '@reduxjs/toolkit';

function App() {

  const select = useSelector((state) => state.count);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>{select}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default App;



export const reducer = (state = { count: 0 }, action) => {

  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

export const store = configureStore({ reducer })

// ...................................................................................

// state is something that is used to see the current value of the part and the modification in that state is called the action

// ...................................................................................

// inside action there are 2 things that is payload and type
// to pass the data we use payload
// reducer will perform according the action

// ...................................................................................

// 1 . state
// 2 . (doing)-->action --> (dispatch) action function
// 3 . reducer --> triggering the reducer with the help of action
// 4 . Updating store --> (useDispatch)  hook is used(all updation process)
// 5 . Select the value from the store-- > (useSelector) hook is used


// ...................................................................................

// reducer --> is a pure function is the advanced form of useState and it takes input and gives the output (handling the logic) according the action type(action)


// ...................................................................................

// To access the state globally we use <Provider><Provider/> in index.js

// ...................................................................................

// Updating the value through button  (useDispatch will be used for updation of the state)
// To take the action from one place to another we use dispatch hooks and to read that data we use selector hooks 


