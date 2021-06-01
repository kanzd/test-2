import React, { useState } from "react";
import {  MuiThemeProvider,Dialog,
    TextField,
    Grid,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Fab,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  List,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    IconButton,

    DialogTitle,} from "@material-ui/core";
import {Image,Menu,Add,Work,ArrowBack} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";



const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#2196f3",
        main: "#2196f3",
        dark: "#2196f34",
        contrastText: "#fff",
      },
      secondary: {
        light: "#2196f3",
        main: "#2196f3",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  var taskList=[
      {taskdetails:"some details",
      taskName:"some name",
    },
    {taskdetails:"some details",
    taskName:"some name",
  },
  {taskdetails:"some details",
  taskName:"some name",
},

  ];
  export default function Index(props) {
    const [open,setopen]=useState(false);
    var temp1="";
    var temp2="";
    const [tasklist,settasklist]=useState([]);
      return (
          <>
               <MuiThemeProvider theme={theme}>
               <Dialog
        open={open}
        onClose={()=>{
            setopen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Task"}</DialogTitle>
        <DialogContent>
          <TextField style={{marginTop:"2%"}} label="Task Name" onChange={(e)=>{
              temp1=e.target.value;
          }} variant="outlined" fullWidth/>
          <TextField style={{marginTop:"2%"}} label="Task details" onChange={(e)=>{
              temp2=e.target.value;
          }} variant="outlined" fullWidth/>
          
          
         
         
         
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
              setopen(false);
          }} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{
              var temp=tasklist;
              temp.push( {taskdetails:temp2,
      taskName:temp1,
    });
    settasklist(temp);
              setopen(false);
          }} color="primary" autoFocus>
            ADD
          </Button>
        </DialogActions>
      </Dialog>
      <AppBar position="sticky">
          <Toolbar>
          <Link to="/"> <IconButton>
                <ArrowBack style={{color:"white"}}></ArrowBack>
            </IconButton></Link>
            <Container  align="center">
           
           
              <Typography variant="h5" >{props.match.params.name}</Typography>
            </Container>
           
          </Toolbar>
        </AppBar>
        <Container algin="center" style={{marginTop:"3%"}}>
        {tasklist.map((value,index)=>(<Card style={{marginTop:"1%"}}>
            <CardActionArea>
            <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Work />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={value.taskName}secondary={value.taskdetails} />
        <ListItemSecondaryAction >
        <IconButton>
        <Menu />
        </IconButton>
        
        </ListItemSecondaryAction>
        </ListItem>
                
            </CardActionArea>
        </Card>))}
        </Container>
        <Container align="center" style={{marginTop:"2%"}}>
            <Fab color="primary" onClick={(e)=>{
                setopen(true);
            }}><Add></Add></Fab>
        </Container>
               </MuiThemeProvider>
          </>
      );
  }