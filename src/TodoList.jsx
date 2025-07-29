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

    const onClickHandler = (indexToDelete) => {
        setTaskList(taskList.filter((_, idx) => idx !== indexToDelete))
    }

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {taskList.map((task, idx) => {
                const labelId = `checkbox-list-label-${idx}`;

                return (
                    <ListItem
                        key={idx}
                        secondaryAction={
                            <IconButton
                                aria-label="delete"
                                size="small"
                                onClick={() => onClickHandler(idx)}>
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={handleToggle(idx)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.includes(task)}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={task} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}