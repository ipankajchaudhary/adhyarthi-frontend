import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import AllStudents from './Components/AllStudents/AllStudents.js';
import students from "students.json";

function App() {
  return (
    <>
      
      <AllStudents students={students}/>
    </>
  );
}

export default App;
