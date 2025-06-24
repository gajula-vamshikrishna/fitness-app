import React from 'react';
import { Line } from 'react-chartjs-2';
import { stepsData } from '../data/values';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = ({ view }) => {
  const steps = stepsData[view]; // Choose based on toggle view

  const data = {
    labels: view === 'daily' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] :
            view === 'weekly' ? ['Week 1', 'Week 2', 'Week 3', 'Week 4'] :
            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: `Steps (${view})`,
      data: steps,
      fill: false,
      borderColor: 'blue',
      tension: 0.3
    }]
  };

  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardContent>
          <Typography variant="h6">Steps Trend</Typography>
          <Line data={data} />
        </CardContent>
      </Card>
    </Grid>
  );
};


export default LineChart;