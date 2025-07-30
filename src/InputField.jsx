import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

export default function InputField({ task, handleKeyDown, setTask }) {
    return (
      <Box>
          <TextField
            helperText="Please enter your task and press return"
            id="task"
            label="Add Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
      </Box>
    );
}