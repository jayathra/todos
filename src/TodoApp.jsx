import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import InputField from './InputField'

const getInitialTasks = () => {
  const data = JSON.parse(localStorage.getItem('todos'));
  if (!data) return [];
  return data;
}

export default function TodoApp() {

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(taskList));
  }, [taskList]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (task.trim()) {
        const newTask = {
          id: crypto.randomUUID(),
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