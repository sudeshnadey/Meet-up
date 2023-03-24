import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Box, Card, Typography, Toolbar, AppBar, IconButton, MenuItem, Menu } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Menu as MenuIcon, Language as LanguageIcon } from '@material-ui/icons';

import { TextField, InputAdornment, Button } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import icon1 from './images/icon1.svg';
import Polygon from './images/Polygon1.svg';
import { useStyles } from "./styles";
import image2 from './images/mea1.png';
import Group1 from './images/Group1.png';
import Group2 from './images/Group2.png';
import Group3 from './images/Group3.png';
import Group4 from './images/Group4.png';

const TwoColumnLayout = () => {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setSelectedOption(event.target.innerText);
  };
  return (
   <div>
      <Grid container spacing={0} >
        <Grid item xs={6}  >
     <Toolbar>
            <Typography variant="h6" className={classes.logo}>
            m. eet
              </Typography>
              <Typography variant="h6" className={classes.nav1}>
                About
              </Typography>
              <Button
                className={classes.dropdown1}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                {selectedOption || 'Plans & Pricing'}&nbsp;<img src={Polygon} alt="Dropdown Icon" />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Option 3</MenuItem>
              </Menu>
            </Toolbar>
      <div className={classes.div1}>
      <div className={classes.divition}>
          <Typography className={classes.heading1}  variant="h4" gutterBottom>
          Welcome to the m. eet app 🍑
          </Typography>
</div><div className={classes.divition1}>
      <Typography className={classes.text1}  variant="h6" gutterBottom>
      Login with email 
          </Typography>
          </div>
          <form className={classes.form} >
      <TextField
        className={classes.input}
        variant="outlined"
        label="Create a Password"
        InputLabelProps={{
          
        }}
    
      /><br></br>
        <TextField
        className={classes.input}
        variant="outlined"
        label="Confirm Password"
        InputLabelProps={{
         
        }}
    
      />
     
      <Button
      className={classes.button}
        variant="contained"
        type="submit"
      >
       Create Account <img src={icon1} className={classes.icon1} alt="Example 1" />
      </Button>
      <Typography variant="body1" className={classes.type1} gutterBottom >
      Don’t have an account?  <span style={{ color: '#FB451A' }}>Signup</span><br></br><br></br>
      </Typography><br></br>
      <Typography className={classes.text1}  variant="h6" gutterBottom>
      Or
      </Typography>
      <div style={{ display: 'flex' }}>
      <img src={Group1} alt="Example 1"  />
      <img src={Group2} alt="Example 2"className={classes.gap1} />
      <img src={Group3} alt="Example 2" className={classes.gap1}/>
      <img src={Group4} alt="Example 2"className={classes.gap1} />
      </div><br></br>
      <div className={classes.divition}>
      <Typography variant="body1" className={classes.type1} gutterBottom >
      m. eet 2023 &nbsp; <span style={{ color: '#3333FF' }}> Terms of Service &nbsp; &nbsp; Privacy Policy&nbsp; &nbsp;&nbsp; &nbsp;   Community Guidelines</span><br></br><br></br>
      </Typography>
      </div>
    </form>
    </div>
        
        </Grid>
        <Grid item xs={6} className={classes.grid2}>
          <img src={image2} alt="Your Image" className={classes.image} />
        </Grid>
      </Grid>
      </div>
  );
};

export default TwoColumnLayout;
