import React from 'react';
import { activityLogs } from '../data/values';
import { Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const ActivityTable = ({ view }) => {
  const logMap = {
    daily: [
      { date: '2025-06-24', activity: 'Running', duration: '30 mins', calories: 300 },
      { date: '2025-06-23', activity: 'Cycling', duration: '45 mins', calories: 400 },
      { date: '2025-06-22', activity: 'Yoga', duration: '60 mins', calories: 200 },
      { date: '2025-06-21', activity: 'Swimming', duration: '40 mins', calories: 350 },
    ],
    weekly: [
      { date: '2025-06-23', activity: 'Cycling', duration: '45 mins', calories: 400 },
      { date: '2025-06-22', activity: 'Yoga', duration: '60 mins', calories: 200 },
      { date: '2025-06-21', activity: 'Swimming', duration: '40 mins', calories: 350 },
    ],
    monthly: [
      { date: '2025-06-20', activity: 'Running', duration: '30 mins', calories: 300 },
      { date: '2025-06-18', activity: 'Gym', duration: '50 mins', calories: 500 },
      { date: '2025-06-15', activity: 'Walking', duration: '60 mins', calories: 250 },
      { date: '2025-06-10', activity: 'Swimming', duration: '40 mins', calories: 350 },
    ],
  };
 console.log('ActivityTable rendered with view:', view);
  const logs = logMap[view] || [];
console.log('Logs for view:', logs);
  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Activity Log ({view})
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Activity</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Calories</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((log, index) => (
              <TableRow key={index}>
                <TableCell>{log.date}</TableCell>
                <TableCell>{log.activity}</TableCell>
                <TableCell>{log.duration}</TableCell>
                <TableCell>{log.calories}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
export default ActivityTable;
