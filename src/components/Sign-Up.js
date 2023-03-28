import React, { useState }  from 'react';
import {Typography, Toolbar,MenuItem, Menu } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { TextField, InputAdornment, Button } from "@material-ui/core";
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
<Typography className={classes.heading}  variant="h4" gutterBottom style={{ fontWeight: '700', }}>
 Welcome to the m. eet app 🍑
</Typography>
<Typography className={classes.heading2}  variant="h6" gutterBottom style={{width:'368px',marginBottom:'30px', }}>
 Use your email or another service to continue with m. eet (it’s free!)
</Typography>
<Typography className={classes.text}  variant="h6" gutterBottom>
Signup with email 
</Typography>
<form className={classes.form} >
<TextField
 className={classes.input}
variant="outlined"
label="Email Address"
/><br></br>
<TextField
className={classes.input}
variant="outlined"
label="Create a Password"
/><br></br>
<TextField
className={classes.input}
variant="outlined"
label="Confirm Password"
 />
<Button
className={classes.button}
variant="contained"
type="submit"
style={{ marginTop:'20px',width:'400px',height:'40px', }}>
Create Account <img src={icon1} className={classes.icon1} alt="Example 1" />
</Button>
<Typography variant="body1" className={classes.text2} gutterBottom >
Already have an account? <span style={{ color: '#FB451A'}}>Login</span>
</Typography>
<Typography className={classes.text}  variant="h6" gutterBottom style={{ marginTop:'20px', }}>
Or
</Typography>
<div style={{ display: 'flex', marginTop:'20px', }}>
<img src={Group1} alt="Example 1"  />
<img src={Group2} alt="Example 2"className={classes.gap1} />
<img src={Group3} alt="Example 2" className={classes.gap1}/>
<img src={Group4} alt="Example 2"className={classes.gap1} />
</div><br></br>
<Typography variant="body1" className={classes.text2} gutterBottom >
m. eet 2023 &nbsp; <span style={{ color: '#3333FF' }}> Terms of Service &nbsp; &nbsp; Privacy Policy&nbsp; &nbsp;&nbsp; &nbsp;   Community Guidelines</span><br></br><br></br>
</Typography>
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
