import React, { Component } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Container, IconButton } from '@mui/material';


export default function ToggleTheme({children}) {
    const [mode, setMode] = React.useState('light');
    // The dark mode switch would invoke this method
    const changeColorMode = () => {
        let newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
    };

    const theme = React.useMemo(
        () =>
        createTheme({
            palette: {
                mode,
            },
        }),
        [mode],
    );

    return (
        <ThemeProvider theme={theme}>
            <IconButton sx={{ ml: 1 }} onClick={changeColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            {children}
        </ThemeProvider>
    );
  };