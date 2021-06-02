import React, { useState } from "react";

import {
  MuiThemeProvider,
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
  Button,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Menu,
  MenuItem,
 
  
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Add,Image,MenuOpen,CloudUpload,Delete,Edit } from "@material-ui/icons";
import { KeyboardDatePicker, MuiPickersUtilsProvider,} from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core/styles";
import {get,post,deletef,put} from "../../services/apicalls";
import {fetchproject,addproject,deleteproject,updateproject} from "../../apis/project_apis";
import {RotateLoader,HashLoader} from "react-spinners";
import "./index.css";
import LoadingOverlay from 'react-loading-overlay';
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
var data = [];

export default function Index(props) {
  const[check,setcheck]=useState(false);
    const [open,setopen]=useState(false);
    const [add,setadd]=useState(false);
    const [updateb,setupdateb]=useState(false);
    const [projectlist,setproject]=useState([]);
    console.log("cdscs");
    (async ()=>{
      if(!check)
      {
      var data = await get(fetchproject());
      console.log(data);
      setcheck(true);

      setproject(data);
      }
      
    })();
    var temp1="null";
    var temp2="null";
    var temp3="null";
    var temparray=[];
    const [updatetemp1,setupdatetemp1]=useState("");
    const [updatetemp2,setupdatetemp2]=useState("");
    const [updatetemp3,setupdatetemp3]=useState("");

    var i=0;
    const [booleanarray,setbooleanarray] = useState(projectlist.map((value,index)=>false));
    while (i<projectlist.length)
    {
      var temp = projectlist.slice(i,i+3);
      temparray.push(temp);
      i=i+3;
    }
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
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
        <DialogTitle id="alert-dialog-title">{"Add Project"}</DialogTitle>
       
        <DialogContent>
          <TextField style={{marginTop:"2%"}} label="Project Name" onChange={(e)=>{
            temp1=e.target.value;
          }}  variant="outlined" fullWidth/>
          
          <TextField style={{marginTop:"2%"}} label="deadline" defaultValue={"2021-06-01"} onChange={(e)=>{
            temp2=e.target.value;
          }}  type="date" variant="outlined" fullWidth/>
          <Grid container spacing={2} style={{marginTop:"2%"}}>
          <Grid item>

          Upload Image
          </Grid>
          <Grid item>
         <input type="file" onChange={(e)=>{
           temp3=e.target.files[0];
         }}></input>
          </Grid>
         
          </Grid>
         
         
        </DialogContent>
       
        <DialogActions>
          <Button onClick={()=>{
              setopen(false);
          }} color="primary">
            Cancel
          </Button>
          <Button onClick={async (e)=>{
            setadd(true);
            var temp=projectlist;
            var body = new FormData();
            body.append("project_name",temp1);
            body.append("project_deadline",temp2);
            body.append("avatar",temp3);
            
            var data = await post(addproject(),body);

            temp.push({
              projectname:temp1,
              deadline:temp2,
            });
            setproject(temp);
            setcheck(false);
              setopen(false);
              setadd(false);
              temp1="null";
              temp2="null";
              temp3="null";
          }} color="primary" autoFocus>
            ADD
          </Button>
        </DialogActions>
        </LoadingOverlay>
      </Dialog>
        <AppBar position="sticky">
          <Toolbar>
            <Container  >
              <Typography variant="h5" > PROJECTS</Typography>
            </Container>
            <Container align="right"><IconButton onClick={(e)=>{
                setopen(true);
            }}  color="primary">
          <Add style={{color:"white"}}></Add>
        </IconButton></Container>
          </Toolbar>
        </AppBar>
        {!check?<Container align="center" style={{marginTop:"10%"}}><RotateLoader color={"#2196f3"}/></Container>:<></>}
      {temparray.length==0&&check?(
        <Container align="center" style={{marginTop:"2%"}}>
          <Typography variant="h5" style={{fontWeight:"bolder",color:"grey"}}>No Project Yet</Typography>
          <Fab color="primary" style={{marginTop:"1%"}} onClick={(e)=>{
            setopen(true);
          }}><Add></Add></Fab>
        </Container>
      ):(<></>)}
        {temparray.map((value,index)=>(
          <Grid container justify="center" style={{marginTop:"2%"}} spacing={1}>
          {value.map((value,index)=>(
            <Grid item lg={3} md={4} xs={12} onClick={(e)=>{
              
            }}>
            <LoadingOverlay active={booleanarray[index]}  spinner={<HashLoader color={"#2196f3"}/>}>
            <Card>
                  <CardActionArea>
                  <ListItem>
        <ListItemAvatar>
          <Avatar src={`https://kanzd123.pythonanywhere.com${value.project_image}`}>
           
          </Avatar>
        </ListItemAvatar>
        <Link to={"/project/"+value.id+"/"+value.project_name}>
        <ListItemText primary={value.project_name} secondary={value.project_deadline} />
        </Link>
       
        <ListItemSecondaryAction >
        
        <IconButton onClick={(e)=>{
          setupdatetemp1(value.project_name);
          setupdatetemp2(value.project_deadline);
          setupdatetemp3(value.id)
          
          setupdateb(true);
        }}>
        <Edit />
        </IconButton>
        <IconButton onClick={async (e)=>{
          var temp11 = booleanarray;
          temp11[index]=true;
          setbooleanarray(temp11);
          var data = await deletef(deleteproject(value.id));
          var temp11 = booleanarray;
          temp11[index]=false;
          setbooleanarray(temp11);
          setcheck(false);

        }}>
        <Delete />
        </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
                  </CardActionArea>
              </Card>
              </LoadingOverlay>
              
          </Grid>
          ))}
        </Grid>
        ))}
        <Dialog
        open={updateb}
        onClose={()=>{
            setupdateb(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       <LoadingOverlay  active={add}  spinner={<HashLoader color={"#2196f3"}/>}>
        <DialogTitle id="alert-dialog-title">{"Edit Project"}</DialogTitle>
       
        <DialogContent>
          <TextField style={{marginTop:"2%"}} label="Project Name" defaultValue={updatetemp1} onChange={(e)=>{
            setupdatetemp1(e.target.value);
          
          }}  variant="outlined" fullWidth/>
          
          <TextField style={{marginTop:"2%"}} label="deadline" defaultValue={updatetemp2} onChange={(e)=>{
           setupdatetemp2(e.target.value);
          }}  type="date" variant="outlined" fullWidth/>
          
         
         
        </DialogContent>
       
        <DialogActions>
          <Button onClick={()=>{
              setupdateb(false);
          }} color="primary">
            Cancel
          </Button>
          <Button onClick={async (e)=>{
            setadd(true);
            var temp=projectlist;
          
            
            var data = await put(updateproject(),{
              "id":updatetemp3,
              "project_name":updatetemp1,
              "project_deadline":updatetemp2,
            });

            // temp.push({
            //   projectname:temp1,
            //   deadline:temp2,
            // });
            // setproject(temp);
            setcheck(false);
            setupdateb(false);
              setadd(false);
              temp1="null";
              temp2="null";
              temp3="null";
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
