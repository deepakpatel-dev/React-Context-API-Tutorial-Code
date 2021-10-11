//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Login from './Login';
import {useStateValue} from './StateProvider';

function App() {
  //const [user,setUser] = useState(null);
  const [state,dispatch] = useStateValue();

  return (
    <div className="App">
      <h2>Next to find Who is Logging</h2>
      <h3>{state.user ? `User logged in as ${state.user}`: "No User Logged in"}</h3>

      <Login />
    </div>
  );
}

export default App;
