"use client"
import { Typography } from '@mui/material';

export default function DashboardTitle() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Overview of your sales performance and customer interactions.
      </Typography>
    </div>
  );
}