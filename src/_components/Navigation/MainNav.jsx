import React, { Component } from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Link } from '@mui/material';

const pages = [{name: 'Home', url: '/'}, {name: 'Patch', url: '/update'}];

const MainNav = () => {
  
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Link
                  key={index}
                  href={page.url}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Link>
              ))}
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  export { MainNav };