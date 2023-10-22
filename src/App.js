import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import download from './assets/download.jpg';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users?classId=da0bbae3-c91b-48a9-bc6a-09da01437b1b&assignmentId=481bc5d0-ca48-4dd8-ae75-388370f858b0&submissionId=f113e3c7-1a7c-a466-425c-fa7032938c23')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        setUsers(data);
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Experienced & professional Team</h1>
        <p></p>
      
        <a>
        Es la adquirida a partir de la terminación y aprobación del pensum académico de la respectiva formación profesional, en el ejercicio de las actividades propias de la profesión o disciplina académica exigida para el desempeño del empleo.
        </a>
        <p></p>
      <div className="App1">
        {users.map((usuario) => <div className="bloque">
          <img src={download}/>
          <div className="footer">
          </div>
          <ul>
          <p>Name: {usuario.name}</p>
          <p>Username: {usuario.username}</p>
          <p>Email: {usuario.email}</p>
          </ul>
          <div className="App2">
           <ul>
          <p>Address</p>
          <p>Street: {usuario.address.street}</p>
          <p>City: {usuario.address.city}</p>
          <p>Zipcode: {usuario.address.zipcode}</p>
          </ul>
          </div>
         
          </div>)}
          
      </div>
      </header>
      
    </div>
  );
}

export default App;
