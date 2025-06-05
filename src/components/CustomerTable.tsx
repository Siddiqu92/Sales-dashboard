"use client";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { userData } from '../app/data';

export default function CustomerTable() {
  return (
    <TableContainer 
      component={Paper} 
      sx={{ 
        width: '100%',
        overflowX: 'auto',
        boxShadow: 'none',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        mt: 4
      }}
    >
      <Typography variant="h6" sx={{ p: 3, fontWeight: 600 }}>
        Customer Overview
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="customer table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
            <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem' }}>Contact</TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem' }}>Last Interaction</TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((user) => (
            <TableRow 
              key={user.name}
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': { backgroundColor: '#f9fbfc' }
              }}
            >
              <TableCell sx={{ fontSize: '0.875rem' }}>{user.name}</TableCell>
              <TableCell sx={{ fontSize: '0.875rem' }}>{user.contact}</TableCell>
              <TableCell sx={{ fontSize: '0.875rem' }}>{user.lastInteraction}</TableCell>
              <TableCell>
               <span style={{
  color: user.status.toLowerCase() === 'active' ? '#16a34a' : '#dc2626',
  backgroundColor: user.status.toLowerCase() === 'active' ? '#f0fdf4' : '#fef2f2',
  padding: '4px 12px',
  borderRadius: '12px',
  fontSize: '0.75rem',
  fontWeight: 500,
  textTransform: 'capitalize',
  display: 'inline-block'
}}>
  {user.status}
</span>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}