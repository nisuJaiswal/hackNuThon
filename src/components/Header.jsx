import React from 'react'
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";

const Header = () => {
  return (
    <>
     <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h5"
            ml={2}
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            <b>Symbiotic</b>
          </Typography>
          <Button href="#" variant="contained" sx={{ my: 1, mx: 1.5 }}>
            Upload
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header