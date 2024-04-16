import { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
function App() {
  return (
    <div className="app">
      <div className="box">
      <h1 className="heading">Todo List</h1>
     <TaskInput/>
      <TaskList/>
      </div>
    </div>
  );
}

export default App;
