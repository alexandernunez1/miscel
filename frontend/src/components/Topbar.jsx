import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Button,
  Box,
} from "@mui/material";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";

import "./topbar.css";

const Topbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar position="relative" style={{ background: "#EEEEEE" }}>
          <Toolbar>
            <ImportContactsRoundedIcon style={{ fill: "#0072ea" }} />
            <Typography
              variant="h6"
              paddingLeft="10px"
              color="#0072ea"
              sx={{ flexGrow: 1 }}
            >
              lms for ells
            </Typography>
            <div className="button-container">
              <Button
                variant="contained"
                color="primary"
              >
                log in
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default Topbar;
