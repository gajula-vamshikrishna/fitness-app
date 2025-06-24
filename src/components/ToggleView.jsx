import React, { useState } from 'react';
import { ButtonGroup, Button, Box } from '@mui/material';

const ToggleView = ({ view, setView }) => (
  <Box textAlign="center" my={2}>
    <ButtonGroup variant="contained">
      <Button onClick={() => setView('daily')} variant={view === 'daily' ? 'contained' : 'outlined'}>Daily</Button>
      <Button onClick={() => setView('weekly')} variant={view === 'weekly' ? 'contained' : 'outlined'}>Weekly</Button>
      <Button onClick={() => setView('monthly')} variant={view === 'monthly' ? 'contained' : 'outlined'}>Monthly</Button>
    </ButtonGroup>
  </Box>
);

export default ToggleView;