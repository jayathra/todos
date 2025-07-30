import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';

export default function InputField({ task, handleKeyDown, setTask }) {
    return (
      <ListItem>
          <TextField
            helperText="Please enter your task and press return"
            id="task"
            label="Add Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
      </ListItem>
    );
}