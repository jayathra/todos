import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import TodoList from './TodoList';

const initTaskList = [
  {id: 1, text: "walk the dog", completed: false},
  {id: 2, text: "walk the cat", completed: false},
  {id: 3, text: "walk the fish", completed: true},
  {id: 4, text: "walk the chickens", completed: false}
]

export default function InputField() {

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(initTaskList);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (task.trim()) {
        const newTask = {
          id: Date.now(),
          text: task.trim(),
          completed: false
        }
        setTaskList([...taskList, newTask]);
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
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  ) 
}