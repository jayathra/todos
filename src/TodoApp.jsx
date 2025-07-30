import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import InputField from './InputField';
import Navbar from './Navbar';

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
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",          // Full viewport height
      maxWidth: {                  // Responsive max width
        xs: "100%",                // Mobile: full width
        sm: "500px",               // Small screens: 500px
        md: "600px",               // Medium screens: 600px
        lg: "700px"                // Large screens: 700px
      },
      margin: "0 auto",
      padding: { xs: 1, sm: 2, md: 3 }, // Responsive padding
      width: "100%"
    }}>
      <Navbar />
      <Box sx={{ width: "100%", maxWidth: "500px" }}> {/* Constrains inner content */}
        <TodoList
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <InputField 
          task={task} 
          setTask={setTask}
          handleKeyDown={handleKeyDown}
        />
      </Box>
    </Box>
  ) 
}