import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { fontWeight } from "@mui/system";


import { Link } from 'react-router-dom';
import CSEDLogo from "../iconComponents/CSEDLogo";
import "./topbar.css";

const Topbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar position="relative" style={{ background: "#FFFFFF" }}>
          <Toolbar>
          <IconButton component={Link} to={'/'}>
          <CSEDLogo width={50} height={50} />
          </IconButton>
          <h4 style={{
            color: "black",
            fontWeight: "bolder"
            }}>
              Open Lessons
          </h4>
            <Typography
            align="center"
              variant="h6"
              color="primary"
              marginRight="110px"
              sx={{ flexGrow: 1 }}
            >
              <Button
              style={{ 
                color: "black",
                textTransform: "none"
              }}
              component={Link} to={'/'}
              >
                home
              </Button>
              <Button 
              style={{ 
                color: "black",
                textTransform: "none"
              }}
              component={Link} to={'/about'}
              >
                about
              </Button>
              <Button 
              style={{ 
                color: "black",
                textTransform: "none"
              }}
              component={Link} to={'/lessons'}
              >
                lessons
              </Button>
            </Typography>
              <Button
              variant="contained"
              style={{
                backgroundColor: "black",
                textTransform: "none"
              }}
              href="https://github.com/alexandernunez1/lms-for-ell"
              >contribute</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default Topbar;
