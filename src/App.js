//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Login from './Login';

function App() {
  const [user,setUser] = useState(null);
  return (
    <div className="App">
      <h2>Next to find Who is Logging</h2>
      <h3>{user ? `The user logged in ${user}`: 'No User'}</h3>

      <Login setUser={setUser}/>
    </div>
  );
}

export default App;
