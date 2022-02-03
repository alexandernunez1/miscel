import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { ThemeOptions } from "@mui/material";

import { Link } from 'react-router-dom';
import CSEDLogo from "../iconComponents/CSEDLogo";
import "./topbar.css";

const Topbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar position="relative" style={{ background: "#EEEEEE" }}>
          <Toolbar>
          <IconButton component={Link} to={'/'}>
          <CSEDLogo width={50} height={50}/>
          </IconButton>
          
            <Typography
            align="center"
              variant="h6"
              color="black"
              marginRight="80px"
              sx={{ flexGrow: 1 }}
            >
              <Button 
              style={{ color: "black"}}
              component={Link} to={'/'}
              >
                home
              </Button>
              <Button 
              style={{ color: "black"}}
              component={Link} to={'/about'}
              >
                about
              </Button>
              <Button 
              style={{ color: "black"}}
              component={Link} to={'/lessons'}
              >
                lessons
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default Topbar;
