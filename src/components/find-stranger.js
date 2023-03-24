import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, MenuItem, Menu } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import image2 from './images/mea1.png';

import healthicon from './images/healthicons_coins.svg';
import Video from './images/Video.svg';
import Home from './images/Home.svg';
import Logout from './images/Logout.svg';
import Setting from './images/Setting.svg';
import Ellipse10 from './images/Ellipse 10.svg';
import Notification from './images/Notification.svg';
import Grid from '@material-ui/core/Grid';
import { Menu as MenuIcon, Language as LanguageIcon } from '@material-ui/icons';

import { TextField, InputAdornment, Button } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import icon1 from './images/icon1.svg';
import Polygon from './images/Polygon1.svg';


import Group1 from './images/Group1.png';
import Group2 from './images/Group2.png';
import Group3 from './images/Group3.png';
import Group4 from './images/Group4.png';
import { height } from '@mui/system';
const drawerWidth = 110;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    "&  .MuiDrawer-paperAnchorDockedLeft":
  {
    borderRight: '1px solid #F5F8FE',
    backgroundColor:'#F5F8FE',
},
  },
  drawerPaper: {
    width: drawerWidth,
  },

  toolbar: theme.mixins.toolbar,
  content: {
   
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  logo: {
  
    fontFamily: 'Iowan Old Style' ,
     fontStyle: 'normal',
     fontWeight: '700',
     fontSize: '24px',
     lineHeight: '32px',
    color: '#000000',
      },
  image:{
    marginTop:'25px',
    marginLeft:'100px',
width:'60%',
height:'90%',
  },
  cardContent: {
    flex: '1 0 auto',
  },
  cardMedia: {
    width: 100,
  },
  cardMediaWrapper: {
    position: 'relative',
    width: 200,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      opacity: 0.8,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'content-box',
        },
      },
    },
  },
  icon: {
    backgroundColor: 'transparent',
    marginTop:'30px',
    '&:hover': {
      backgroundColor: 'orange',
      color:'orange',
    },
  },
  list:{
marginLeft:'18px',
marginTop:'30px',
  },
  button:{
    width:'400px',
    height:'40px',
    color:'#FFFFFF',
    marginTop:'20px',
    fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '18px',
  textTransform: 'none',
  backgroundColor:'#FB451A',
  borderRadius:' 8px',
  "&  .MuiButton-label":
    {
   width:'100%',
  },
  '&:hover': {
    backgroundColor: '#FB451A', // specify the hover color
  },
   },
   heading2:{
    fontFamily: 'Iowan Old Style',
    width:'368px',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '22px',
    color:'#000000',
    marginBottom:'30px',
    },
    heading1:{
        fontFamily: 'Iowan Old Style',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '36px',
        lineHeight: '49px',
        color: '#000000',
         },
         div1: {
            marginLeft: '50px',
            marginTop: '150px',
           },

       
}));


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
    
      <Card style={{ display: 'flex' ,backgroundColor:'#F5F8FE',marginTop:'30px',width:'88%',height:'530px', marginLeft: '30px', border:'1px solid transparent', borderRadius:'12px',}}>
        <Grid item xs={6} >
        <div className={classes.div1}>
          <Typography className={classes.heading1}  variant="h4" gutterBottom>
          Find yourself a m. eet
          </Typography>
     <Typography className={classes.heading2}  variant="h6" gutterBottom>
     Lorem Ipsum is simply dummy text of the printing and 
typesetting industry.
          </Typography>
          <Button
      className={classes.button}
        variant="contained"
        type="submit"
      >
       Get Started 
      </Button>
          </div>
 
        </Grid>
        <Grid item xs={6}  className={classes.grid2}>
          <img src={image2} alt="Your Image" className={classes.image} />
        </Grid>
        </Card>
    </div>
  );
};

export default SideNavbar;
