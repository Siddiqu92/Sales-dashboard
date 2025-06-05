"use client"
import { Card, CardContent, Typography, Box } from '@mui/material';
import RegionChart from './RegionChart';

export default function CustomerRegionCard() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Customer Distribution by Region
        </Typography>
        <Typography variant="h4" component="div">
          1000 Customers
        </Typography>
        <Typography variant="body2" color="success.main" gutterBottom>
          Current +5%
        </Typography>
        <Box sx={{ height: 150 }}>
          <RegionChart />
        </Box>
      </CardContent>
    </Card>
  );
}