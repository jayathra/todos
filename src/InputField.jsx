import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import TodoList from './TodoList';

export default function InputField() {

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (task.trim()) {
        setTaskList([...taskList, task.trim()]);
        setTask("");
      }
    }
  };

  return (
    <div>
      <TodoList taskList={taskList} setTaskList={setTaskList}/>
      <TextField
        helperText="Please enter your task and press return"
        id="task"
        label="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  ) 
}