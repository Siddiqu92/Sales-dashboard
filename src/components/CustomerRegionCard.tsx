"use client";
import { Card, CardContent, Typography, Box } from '@mui/material';
import RegionChart from './RegionChart';
import { userData } from '../app/data';

export default function CustomerRegionCard() {
  const totalCustomers = userData.length;
  const regionCounts = userData.reduce(
    (acc, user) => {
      acc[user.region] = (acc[user.region] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Customer Distribution by Region
        </Typography>
        <Typography variant="h4" component="div">
          {totalCustomers} Customers
        </Typography>
        <Typography variant="body2" color="success.main" gutterBottom>
          Current +5%
        </Typography>
        <Box sx={{ height: 150 }}>
          <RegionChart regionCounts={regionCounts} />
        </Box>
      </CardContent>
    </Card>
  );
}
