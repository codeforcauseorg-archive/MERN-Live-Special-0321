import { Box, Button, makeStyles } from "@material-ui/core";
import axios from 'axios';

let useStyles = makeStyles({
  root : {
    width: "100vw",
    minHeight: "100vh",
    background: "#aaaaaa",
    display: "flex",
    flexDirection: "column", 
    alignItems: "center"
  },

  headerImg: {
    marginTop: "50px",
    width: "600px",
    height: "150px",
    borderRadius: "15px"
  },

  inputBox: {
    marginTop: "20px",
    width: "600px",
    height: "150px",
    borderRadius: "15px",
    background: "#ffffff"
  },
  
})

function App() {

  let submitForm = function(){
    let data = {
      name : "Anuj Garg",
      age: 27
    }

    axios.post("http://localhost:5000/submit/", data).then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    });

  }


  let classes = useStyles();

  return (
    <Box className={classes.root}>

      <img className={classes.headerImg} src="/images/bg.jpg"/>

      <Box className={classes.inputBox}></Box>
      <Box className={classes.inputBox}></Box>
      <Box className={classes.inputBox}></Box>

      <Button onClick={submitForm}>Click Here</Button>

    </Box>
  );
}

export default App;
