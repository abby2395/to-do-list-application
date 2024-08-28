import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Paper, Container } from '@mui/material';

const TaskForm = ({ fetchTasks }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/tasks/', { title, description });
            setTitle('');
            setDescription('');
            if (fetchTasks) {
                fetchTasks();
            }
        } catch (error) {
            console.error('Error creating task:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ padding: 2 }}>
                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2
                        }}
                    >
                        <TextField
                            label="Task Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Task Description (optional)"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            multiline
                            rows={4}
                            fullWidth
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Add Task
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default TaskForm;
