
import { Container, Grid } from '@mui/material';
import Header from './components/Header';
import StatCard from './components/StatCard';
import GoalsCard from './components/GoalsCard';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import ToggleView from './components/ToggleView';
import ActivityTable from './components/ActivityTable';
import Footer from './components/Footer';
import React, { useState } from 'react';

function App() {
  const [view, setView] = useState('daily');

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <ToggleView view={view} setView={setView} />
        <Grid container spacing={2}>
          <StatCard view={view} />
          <GoalsCard view={view} />
        </Grid>
         <Grid container spacing={2} sx={{ mt: 4 }}>
    <Grid item xs={12} md={6}>
      <LineChart view={view} />
    </Grid>
    <Grid item xs={12} md={6}>
      <BarChart view={view} />
    </Grid>
  </Grid>
   <Grid container spacing={2} sx={{ mt: 4 }}>
         <ActivityTable view={view} />
         </Grid>
      </Container>
      <Footer />
    </>
  );
}
export default App;
