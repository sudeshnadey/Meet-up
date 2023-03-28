import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 110;
export const useStyles = makeStyles((theme) => ({
  
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
   
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
 

 // specify the Global CSS


// specify the button
button:{
  width:'400px',height:'40px',
  color:'#FFFFFF',
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '18px',
  textTransform: 'none',
  backgroundColor:'#FB451A',
  borderRadius:' 8px',
  '&:hover': {
  backgroundColor: '#FB451A', 
  },
   },
   // specify the logo
  logo : {
  marginLeft:'80px',
  fontFamily: 'Iowan Old Style' ,
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '32px',
  lineHeight: '44px',
  color: '#000000',
   },
  
  // specify the heading
  heading:{
  fontFamily: 'Iowan Old Style',
  fontStyle: 'normal',
  fontSize: '36px',
  lineHeight: '49px',
  color: '#000000',
  },
  // specify the heading2
  heading2:{
  fontFamily: 'Iowan Old Style',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '22px',
  color:'#000000',
  
  },
   // specify the input
  input:{
    width:'400px' ,
    marginTop:'10px',
    border: 'none',
    backgroundColor:'#F5F8FE',
    '&:hover': {
    border: 'red',
     },
    "& .MuiFormLabel-root": {
    fontFamily: 'sans-serif',
    marginTop:'-7px',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
     lineHeight: '21px',
     color:'#A1A1A1',
     },
    "& .MuiOutlinedInput-root ": {
    border: '1px solid #E3EDFF',
    bordeRadius: '8px',
      },
    '&:hover': {
        color:'#A1A1A1',
        backgroundColor:'white',
      },
      "& .MuiInputBase-input": {
        height: '0.4876em',
      },
      },
// Specify the grid color
grid2:{
 backgroundColor:'#F5F8FE',
height:'auto'
 },

// Others Css

gap1:{
marginLeft:'50px',
},
icon1:{
marginLeft:'5px',
},
nav1: {
marginLeft:'180px',
fontFamily: 'Iowan Old Style' ,
fontStyle: 'normal',
fontWeight: '700',
fontSize: '14px',
lineHeight: '24px',
color: '#333333',
},
div1: {
marginLeft: '100px',
marginTop: '50px',
},
image: {
width: '72%',
marginTop:'35px',
marginLeft:'100px',
height: 'auto',
},
image1:{
  marginTop:'25px',
  marginLeft:'100px',
  width:'60%',
  height:'90%',
   },
text:{
fontFamily: 'Iowan Old Style',
width:'368px',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '12px',
lineHeight: '16.38px',
color:'#000000',
},
dropdown1:{
marginLeft:'40px',
textTransform: 'none',
fontFamily: 'Iowan Old Style',
fontStyle: 'normal',
fontWeight: '700',
fontSize: '14px',
lineHeight: '24px',
color:'#333333',
},
text2:{
marginTop:'10px',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '12px',
lineHeight: '18px',
color:'#A1A1A1',
},
list:{
marginLeft:'18px',
marginTop:'30px',
},
break2: {
marginLeft: '50px',
marginTop: '150px',
},
card2:{
display: 'flex' ,
backgroundColor:'#F5F8FE',
marginTop:'10px',
width:'88%',
height:'530px', 
marginLeft: '130px',
border:'1px solid transparent', 
borderRadius:'12px',
},
}));

