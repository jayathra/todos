import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

export default function TodoListItem({ task, onClickHandler, handleToggle }) {

    const labelId = `checkbox-list-label-${task.id}`;

    return (
        <ListItem
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
}