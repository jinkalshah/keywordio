import React from "react";
import Box from "@mui/material/Box";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ background: '#ffffff', color:"#000"}} position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }} 
              style={{fontWeight:"500"}}       
            >
             APP LOGO
            </Typography>
            <div>

            <Button>
              <Link  style={{color:'#000', textDecoration:"none"}} to="/dashboard">DASHBOARD</Link></Button>
            <Button>
              <Link  style={{color:'#000',textDecoration:"none"}} to="/create-ad">CREATE ADS</Link></Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
