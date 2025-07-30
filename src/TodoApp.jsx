import Box from '@mui/material/Box';
import { useState } from 'react';
import TodoList from './TodoList';
import InputField from './InputField'

const initTaskList = [
  {id: 1, text: "walk the dog", completed: false},
  {id: 2, text: "walk the cat", completed: false},
  {id: 3, text: "walk the fish", completed: true},
  {id: 4, text: "walk the chickens", completed: false}
]

export default function TodoApp() {

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
      <h1>TO DO LIST</h1>
      <TodoList
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <InputField 
        task={task} 
        setTask={setTask}
        handleKeyDown={handleKeyDown}
      />
    </div>
  ) 
}