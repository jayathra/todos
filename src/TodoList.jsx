import List from '@mui/material/List';
import TodoListItem from './todoListItem';

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
                return (
                    <TodoListItem
                        key={task.id}
                        task={task}
                        onClickHandler={onClickHandler}
                        handleToggle={handleToggle}
                    />
                )
            })}
        </List>
    );
}