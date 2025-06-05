'use client';

import Header from '../components/Header';
import DashboardTitle from '../components/DashboardTitle';
import SalesCard from '../components/SalesCard';
import CustomerRegionCard from '../components/CustomerRegionCard';
import CustomerTable from '../components/CustomerTable';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f9fbfc' }}>
      <Header />
      <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
        <DashboardTitle />
        
      
        
        {/* Two Card Section */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          mb: 4
        }}>
          {/* Quarterly Sales Card - Now using only the SalesCard component */}
          <Box sx={{ flex: 1 }}>
            <SalesCard />
          </Box>
          
          {/* Customer Region Card */}
          <Box sx={{ flex: 1 }}>
            <CustomerRegionCard />
          </Box>
        </Box>
        
        {/* Customer Overview Table */}
        <Box sx={{ 
          width: '100%',
          overflowX: 'auto',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 1,
          p: 3
        }}>
          <CustomerTable />
        </Box>
      </Box>
    </Box>
  );
}