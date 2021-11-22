import { 
  Typography, 
  AppBar, 
  CssBaseline, 
  Toolbar, 
  Button,
  Box } from '@mui/material'
  import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';


const Topbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar position="relative" style={{ background: "#0e6958" }}>
          <Toolbar>
            <ImportContactsTwoToneIcon />
            <Typography
              variant="h6"
              paddingLeft="10px"
              color="pink"
              sx={{ flexGrow: 1 }}>
              lms for ells
            </Typography>
            <Button color="inherit">log in</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default Topbar;
