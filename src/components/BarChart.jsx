import React from 'react';
import { Bar } from 'react-chartjs-2';
import { calorieData } from '../data/values';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const BarChart = ({ view }) => {
  const labels = view === 'daily' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] :
                 view === 'weekly' ? ['Week 1', 'Week 2', 'Week 3', 'Week 4'] :
                 ['Jan', 'Feb', 'Mar'];

  const data = {
    labels,
    datasets: [{
      label: `Calories Burned (${view})`,
      data: view === 'daily' ? calorieData.data :
            view === 'weekly' ? [1500, 1800, 1700, 1600] :
            [6000, 7000, 8000],
      backgroundColor: 'orange'
    }]
  };

  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardContent>
          <Typography variant="h6">Calories Burned</Typography>
          <Bar data={data} />
        </CardContent>
      </Card>
    </Grid>
  );
};
export default BarChart;