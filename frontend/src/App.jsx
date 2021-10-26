import React from 'react';
import { 
    Typography, 
    AppBar, 
    Card, 
    CardActions, 
    CardContent, 
    Cardmedia, 
    CssBaseline, 
    Grid, 
    Toolbar, 
    Container, 
    Button,
    Box } from '@mui/material'
    import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';

const App = () => {
    return(
        <Box sx={{ flexGrow: 1}}>
            <CssBaseline />
            <AppBar position="relevant" style={{ background: "#0e6958" }}>
                <Toolbar>
                    <ImportContactsTwoToneIcon />
                    <Typography variant="h6" paddingLeft="10px" 
                                color="pink" sx={{ flexGrow: 1 }}> lms for ells</Typography>
                    <Button color="inherit">About us</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default App;