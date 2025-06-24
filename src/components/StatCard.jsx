import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';


const StatCard = ({ view }) => {
  const statMap = {
    daily: [
      { label: 'Steps', value: '6,000' },
      { label: 'Calories Burned', value: '450' },
      { label: 'Distance', value: '5.2 km' },
    ],
    weekly: [
      { label: 'Steps', value: '28,000' },
      { label: 'Calories Burned', value: '1800' },
      { label: 'Distance', value: '20.4 km' },
    ],
    monthly: [
      { label: 'Steps', value: '110,000' },
      { label: 'Calories Burned', value: '7200' },
      { label: 'Distance ', value: '85 km' },
    ]
  };

const stats = statMap[view] || [];

  return stats.map((stat, index) => (
    <Grid item xs={12} md={4} key={index}>
      <Card>
        <CardContent>
          <Typography variant="h6">{stat.label}</Typography>
          <Typography variant="h4">{stat.value}</Typography>
        </CardContent>
      </Card>
    </Grid>
  ));
};


export default StatCard;