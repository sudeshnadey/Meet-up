import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import image2 from './images/mea1.png';
import healthicon from './images/healthicons_coins.svg';
import Video from './images/Video.svg';
import Home from './images/Home.svg';
import Logout from './images/Logout.svg';
import Setting from './images/Setting.svg';
import Ellipse10 from './images/Ellipse 10.svg';
import Notification from './images/Notification.svg';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";





const SideNavbar = () => {
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
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
       
       <List>
          <ListItem>
          <Typography variant="h6" className={classes.logo}>
            m. eet
              </Typography>
          </ListItem>
          <div className={classes.list}>
          <ListItem className={classes.icon}>
            <ListItemIcon><img src={Home} alt="Example 1"  /></ListItemIcon>
          </ListItem>
          <ListItem className={classes.icon}>
            <ListItemIcon><img src={Video} alt="Example 1"  /></ListItemIcon>
          </ListItem>
          <ListItem className={classes.icon}>
            <ListItemIcon><img src={healthicon} alt="Example 1"  /></ListItemIcon>
          </ListItem>
          <ListItem className={classes.icon}>
            <ListItemIcon><img src={Notification} alt="Example 1"  /></ListItemIcon>
          </ListItem>
          <ListItem className={classes.icon}>
            <ListItemIcon><img src={Setting} alt="Example 1"  /></ListItemIcon>
          </ListItem><br></br><br></br>
          <ListItem className={classes.icon}>
            <ListItemIcon><img src={Logout} alt="Example 1"  /></ListItemIcon>
          </ListItem>
          <ListItem className={classes.icon}>
            <ListItemIcon><img src={Ellipse10} alt="Example 1"  /></ListItemIcon>
          </ListItem>
          </div>
        </List>
      </Drawer>
    
      <Card className={classes.card2}>
        <Grid item xs={6} >
        <div className={classes.break2}>
          <Typography className={classes.heading}  variant="h4" gutterBottom>
          Find yourself a m. eet
          </Typography>
     <Typography className={classes.heading2}  variant="h6" gutterBottom style={{ width:'368px', marginBottom:'30px', }}>
     Lorem Ipsum is simply dummy text of the printing and 
typesetting industry.
          </Typography>
          <Button
      className={classes.button}
        variant="contained"
        type="submit"
        style={{ marginTop:'20px', }}
      >
       Get Started 
      </Button>
          </div>
 
        </Grid>
        <Grid item xs={6}  className={classes.grid2}>
          <img src={image2} alt="Your Image" className={classes.image1} />
        </Grid>
        </Card>
    </div>
  );
};

export default SideNavbar;
