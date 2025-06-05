"use client";
import { Card, CardContent, Typography, Box } from '@mui/material';
import QuarterlyChart from './QuarterlyChart';

export default function SalesCard() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Quarterly Sales
        </Typography>
        <Typography variant="h4" component="div">
          $250,000
        </Typography>
        <Typography variant="body2" color="success.main" gutterBottom>
          Last Quarter +15%
        </Typography>
        <Box sx={{ height: 150 }}>
          <QuarterlyChart />
        </Box>
      </CardContent>
    </Card>
  );
}