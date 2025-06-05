"use client"
import { Search, Notifications, AccountCircle } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton, Badge } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Test Task
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'relative', mr: 2 }}>
            <InputBase
              placeholder="Search..."
              sx={{
                pl: 3,
                pr: 1,
                py: 0.5,
                borderRadius: 4,
                bgcolor: 'action.hover'
              }}
            />
            <Search sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)' }} />
          </Box>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton size="large" edge="end" color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}