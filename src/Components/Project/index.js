import React, { useState } from "react";
import {  
  MuiThemeProvider,
  Dialog,
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
  DialogTitle,
 } from "@material-ui/core";
import {Image,Menu,Add,Work,ArrowBack,Delete,Edit, EditAttributes} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import {get,post,deletef,put} from "../../services/apicalls";
import {fetchtask,addtask,deletetask,updatetask} from "../../apis/task_apis";
import LoadingOverlay from 'react-loading-overlay';
import {RotateLoader,HashLoader} from "react-spinners";
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
    const [add,setadd]=useState(false);
    const [upd,setupd]=useState(false);
    const [tasklist,settasklist]=useState([]);
    const[check,setcheck]=useState(false);
    const [updateb,setupdateb]=useState(false);
    const [updatetemp1,setupdatetemp1]=useState("");
    const [updatetemp2,setupdatetemp2]=useState("");
    const [updatetemp3,setupdatetemp3]=useState("");
    
    (async ()=>{
      if(!check)
      {
      var data = await get(fetchtask(props.match.params.id));
      console.log(data);
      setcheck(true);

      settasklist(data);
      }
      
    })();
   
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
      <LoadingOverlay  active={add}  spinner={<HashLoader color={"#2196f3"}/>}>
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
          <Button onClick={async (e)=>{
    //           var temp=tasklist;
    //           temp.push( {taskdetails:temp2,
    //   taskName:temp1,
    // });
    // settasklist(temp);
    setadd(true);
    var data =await post(addtask(),{
      "Task_name":temp1,
      "Task_details":temp2,
      "project_id":props.match.params.id
    });
    
    setadd(false);
              setopen(false);
              setcheck(false);
          }} color="primary" autoFocus>
            ADD
          </Button>
        </DialogActions>
        </LoadingOverlay>
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
        {!check?<Container align="center"><RotateLoader color={"#2196f3"}/></Container>
        :<></>}
        {tasklist.map((value,index)=>(<Card style={{marginTop:"1%"}}>
            <CardActionArea>
            <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Work />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={value.Task_name}secondary={value.Task_details} />
        <ListItemSecondaryAction >
        <IconButton onClick={(e)=>{
          setupdatetemp1(value.Task_name);
          setupdatetemp2(value.Task_details);
          setupdatetemp3(value.id);
          setupdateb(true);
        }}>
        <Edit />
        </IconButton>
        <IconButton onClick={async (e)=>{
          
          var data = await deletef(deletetask(value.id));
          setcheck(false);
        }}>
        <Delete />
        </IconButton>
        
        </ListItemSecondaryAction>
        </ListItem>
                
            </CardActionArea>
        </Card>))}
        </Container>
        {check? <Container align="center" style={{marginTop:"2%"}}>
       
            <Fab color="primary" onClick={(e)=>{
                setopen(true);
            }}><Add></Add></Fab>
             <Typography variant="h5" style={{fontWeight:"bolder",color:"grey",marginTop:"1%"}}> Add Task</Typography>
        </Container>:<></>}
        <Dialog
        open={updateb}
        onClose={()=>{
            setopen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <LoadingOverlay  active={upd}  spinner={<HashLoader color={"#2196f3"}/>}>
        <DialogTitle id="alert-dialog-title">{"Add Task"}</DialogTitle>
        <DialogContent>
          <TextField style={{marginTop:"2%"}} label="Task Name" defaultValue={updatetemp1} onChange={(e)=>{
              setupdatetemp1(e.target.value);
          }} variant="outlined" fullWidth/>
          <TextField style={{marginTop:"2%"}} label="Task details" defaultValue={updatetemp2} onChange={(e)=>{
              setupdatetemp2(e.target.value);
          }} variant="outlined" fullWidth/>
          
          
         
         
         
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
              setupdateb(false);
          }} color="primary">
            Cancel
          </Button>
          <Button onClick={async (e)=>{
    //           var temp=tasklist;
    //           temp.push( {taskdetails:temp2,
    //   taskName:temp1,
    // });
    // settasklist(temp);
    setupd(true);
    var data =await put(updatetask(),{
      "Task_name":updatetemp1,
      "Task_details":updatetemp2,
      "id":updatetemp3
    });
    setupd(false);
    setupdateb(false);
              setopen(false);
              setcheck(false);
          }} color="primary" autoFocus>
            UPDATE
          </Button>
        </DialogActions>
        </LoadingOverlay>
      </Dialog>
               </MuiThemeProvider>
          </>
      );
  }