import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

export default function TodoList({ taskList, setTaskList }) {

    const onClickHandler = (idToDelete) => {
        setTaskList(taskList.filter((task) => task.id !== idToDelete))
    }

    const handleToggle = (taskId) => {
        setTaskList(taskList.map(task => 
            task.id === taskId 
                ? { ...task, completed: !task.completed }
                : task
        ));
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {taskList.map((task) => {
                const labelId = `checkbox-list-label-${task.id}`;

                return (
                    <ListItem
                        key={task.id}
                        secondaryAction={
                            <IconButton
                                aria-label="delete"
                                size="small"
                                onClick={() => onClickHandler(task.id)}>
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={() => handleToggle(task.id)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={task.completed}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText 
                                id={labelId} 
                                primary={task.text}
                                sx={{
                                    textDecoration: task.completed ? 'line-through' : 'none',
                                    opacity: task.completed ? 0.6 : 1
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}