import TextField from '@mui/material/TextField';

export default function InputField({ task, handleKeyDown, setTask }) {
    return (
        <TextField
            helperText="Please enter your task and press return"
            id="task"
            label="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
        />
    );
}