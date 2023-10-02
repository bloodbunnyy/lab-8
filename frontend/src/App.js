import { useState, useEffect } from "react";
import List from "./components/List";
import "./App.css";

// Summon the useEffect hook and load that tasks when the page is born anew -- instead of using a predefined list

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="page">
      {" "}
      <List heading="My Tasks" tasks={tasks} setTasks={setTasks} />{" "}
    </div>
  );
}
export default App;

/*function App() {

    const [tasks, setTasks] = useState([
        { id: 1, description: 'Learn React', completed: true },
        { id: 2, description: 'Learn JSX', completed: false },
        { id: 3, description: 'Build a React App', completed: false }
    ]);

    return (
        <div className='page'>     
            <List heading='My Tasks' tasks={tasks} setTasks={setTasks}/>
        </div>
    );
}

export default App; */
