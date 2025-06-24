import React from 'react';
import { Grid, Card, CardContent, Typography, LinearProgress } from '@mui/material';
const GoalsCard = ({ view }) => {
  const goalData = {
    daily: { goal: 10000, progress: 60 },
    weekly: { goal: 70000, progress: 75 },
    monthly: { goal: 300000, progress: 90 },
  };

 const { goal, progress } = goalData[view] || { goal: 0, progress: 0 };
const safeView = view ?? 'daily';
const title = safeView.charAt(0).toUpperCase() + safeView.slice(1);


  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
         

<Typography variant="h6">{title} Goal Progress</Typography>

          <Typography variant="body1">Steps Goal: {goal.toLocaleString()}</Typography>
          <LinearProgress variant="determinate" value={progress} sx={{ mt: 2 }} />
        </CardContent>
      </Card>
    </Grid>
  );
};
export default GoalsCard;