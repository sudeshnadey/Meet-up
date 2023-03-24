import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { FaGoogle, FaApple } from "react-icons/fa";

export const useStyles = makeStyles((theme) => ({
  
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
   
  },
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  image: {
    width: '72%',
    marginTop:'35px',
    marginLeft:'100px',
    height: 'auto',
  },
  grid2:{
    backgroundColor:'#F5F8FE',
    height:'auto'
  },
  divition:{
    marginTop:'50px',
  },
  divition1:{
    marginTop:'30px',
  },
  logo: {
marginLeft:'80px',
fontFamily: 'Iowan Old Style' ,
 fontStyle: 'normal',
 fontWeight: '700',
 fontSize: '32px',
 lineHeight: '44px',
color: '#000000',
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
 grid1: {
  backgroundColor: '#041533',
 },

 head1: {
  marginTop: '50px',
  marginLeft: '20px',
  fontFamily: 'sans-serif' ,
 fontStyle: 'normal',
 fontWeight: '600',
 fontSize: '34px',
 lineHeight: '40px',
 },
 head2: {
  marginTop: '20px',
  marginLeft: '20px',
  fontFamily: 'Roboto' ,
 fontStyle: 'normal',
 fontSize: '16px',
 lineHeight: '25px',
 width: '300px',
 },
 div1: {
  marginLeft: '100px',
  marginTop: '10px',
 },
 div2: {
  marginLeft: '180px',
  marginTop: '30px',
 },
 div3:{
  marginTop: '100px',
 },
 heading1:{
fontFamily: 'Iowan Old Style',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '36px',
lineHeight: '49px',
color: '#000000',
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
text1:{
fontFamily: 'Iowan Old Style',
width:'368px',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '12px',
lineHeight: '16px',
color:'#000000',
},
 button1:{
fontFamily: 'sans-serif',
fontStyle: 'normal',
fontWeight: '500',
fontSize: '12px',
lineHeight: '18px',
color:'#A1A1A1',
  backgroundColor: 'white',
  marginLeft:'10px',
  marginTop:'20px',
  textTransform: 'none',
  boxSizing: 'border-box',
  border: '1px solid #E8E8E8',
borderRadius:'6px',
boxShadow: 'none',
  '& img': {
    width: '20px', // specify the width of the image
  },
  '&:hover': {
    backgroundColor: 'white', // specify the hover color
    boxShadow: 'none',
  },

  
 },
 button2:{
  fontFamily: 'sans-serif',
fontStyle: 'normal',
fontWeight: '500',
fontSize: '12px',
lineHeight: '18px',
color:'#A1A1A1',
  backgroundColor: 'white',
  marginTop:'20px',
  textTransform: 'none',
  boxSizing: 'border-box',
  border: '1px solid #E8E8E8',
borderRadius:'6px',
boxShadow: 'none',
  '& img': {
    width: '20px', // specify the width of the image
  },
  '&:hover': {
    backgroundColor: 'white', // specify the hover color
    boxShadow: 'none',
  },

  
 },
 gap1:{
marginLeft:'50px',
 },
 text:{
  fontFamily: 'sans-serif',
fontStyle: 'normal',
fontWeight: '500',
fontSize: '14px',
lineHeight: '21px',
color:'#A1A1A1',
marginLeft:'200px',
marginTop: '20px',

 },
 form:{
  marginTop:'-10px',
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
icon1:{
  marginLeft:'5px',
},
 input:{
  width:'400px' ,
  marginTop:'10px',
  border: 'none',
  backgroundColor:'#F5F8FE',
  '&:hover': {
    border: 'red', // specify the hover color
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
    '&:hover': {
      border: 'red', // specify the hover color
    },
},
'&:hover': {
  color:'#A1A1A1',
  backgroundColor:'white',
},
"& .MuiInputBase-input": {
  height: '0.4876em',
},


 },
 card2: {
  height: '600px',
  borderRadius: '0px 30px 30px 0px',
 },
 img1:{
 marginLeft:'50px',
  marginTop:'50px',
},
logo1:{
  marginLeft:'10px',
  marginTop:'10px',
},
type1:{
marginTop:'10px',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '12px',
lineHeight: '18px',
color:'#A1A1A1',
},
type2:{
marginTop:'20px',
marginLeft:'300px',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '12px',
lineHeight: '18px',
color:'#A1A1A1',
},
dropdown1:{
marginLeft:'40px',
marginTop:'0px',
textTransform: 'none',
fontFamily: 'sans-serif',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '12px',
lineHeight: '18px',
color:'#333333',
}
}));

