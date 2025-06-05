"use client";
import { Card, CardContent, Typography, Box } from '@mui/material';
import QuarterlyChart from './QuarterlyChart';
import { userData } from '../app/data';

function getTotalSalesForQ4() {
  const months = ['October', 'November', 'December'];
  let total = 0;

  userData.forEach((user) => {
    user.salesPerMonth.forEach(({ month, sales }) => {
      if (months.includes(month)) {
        total += sales;
      }
    });
  });

  return total;
}

export default function SalesCard() {
  const q4Sales = getTotalSalesForQ4();

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Quarterly Sales
        </Typography>
        <Typography variant="h4" component="div">
          ${q4Sales.toLocaleString()}
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
