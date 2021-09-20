import './App.css';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <ExtarnalUsers></ExtarnalUsers>
    </div>
  );
}

function ExtarnalUsers(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("Inside");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div>
    {users.map(user => <User name={user.name} username={user.username} email={user.email}></User>)}
    </div>
  );
}

function User(props){
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Username: {props.username}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default App;
