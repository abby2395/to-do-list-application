import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, List, ListItem, ListItemText, Checkbox, Box, Paper, Container } from '@mui/material';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/tasks/');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error.response ? error.response.data : error.message);
        }
    };

    const handleComplete = async (task) => {
        try {
            await axios.patch(`http://localhost:8000/api/tasks/${task.id}/`, {
                is_completed: !task.is_completed,
            });
            fetchTasks();
        } catch (error) {
            console.error('Error updating task:', error.response ? error.response.data : error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/tasks/${id}/`);
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ padding: 2 }}>
                <List>
                    {tasks.map(task => (
                        <ListItem
                            key={task.id}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1,
                                gap: 2,
                            }}
                        >
                            <Checkbox
                                checked={task.is_completed}
                                onChange={() => handleComplete(task)}
                            />
                            <ListItemText
                                primary={task.title}
                                secondary={task.description || 'No description'}
                                sx={{
                                    textDecoration: task.is_completed ? 'line-through' : 'none',
                                    flexGrow: 1,
                                }}
                            />
                            <Button
                                onClick={() => handleComplete(task)}
                                color={task.is_completed ? 'default' : 'primary'}
                                size="small"
                            >
                                {task.is_completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                            </Button>
                            <Button
                                onClick={() => handleDelete(task.id)}
                                color="error"
                                size="small"
                            >
                                Delete
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
};

export default TaskList;
