import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Container, Typography, Box } from '@mui/material';

const App = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    To-Do List
                </Typography>
                <Box sx={{ mb: 4 }}>
                    <TaskForm fetchTasks={() => window.location.reload()} />
                </Box>
                <TaskList />
            </Box>
        </Container>
    );
};

export default App;
