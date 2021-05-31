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
 
  
} from "@material-ui/core";
import { Add,Image,Menu,CloudUpload } from "@material-ui/icons";
import { KeyboardDatePicker, MuiPickersUtilsProvider,} from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core/styles";

import "./index.css";

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

export default function Index(props) {
    const [open,setopen]=useState(false);
    
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
        <DialogTitle id="alert-dialog-title">{"Add Project"}</DialogTitle>
        <DialogContent>
          <TextField style={{marginTop:"2%"}} label="Project Name"  variant="outlined" fullWidth/>
          
          <TextField style={{marginTop:"2%"}} label="deadline" defaultValue={"2021-06-01"}   type="date" variant="outlined" fullWidth/>
          <Grid container spacing={2} style={{marginTop:"2%"}}>
          <Grid item>

          Upload Image
          </Grid>
          <Grid item>
         <input type="file"></input>
          </Grid>
         
          </Grid>
         
         
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
              setopen(false);
          }} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{
              setopen(false);
          }} color="primary" autoFocus>
            ADD
          </Button>
        </DialogActions>
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
        <Grid container justify="center" style={{marginTop:"2%"}} spacing={1}>
          <Grid item xs={3}>
              <Card>
                  <CardActionArea>
                  <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Project1" secondary="Jan 9, 2014" />
        <ListItemSecondaryAction >
        <IconButton>
        <Menu />
        </IconButton>
        
        </ListItemSecondaryAction>
        </ListItem>
                  </CardActionArea>
              </Card>
          </Grid>
          <Grid item xs={3}>
              <Card>
                  <CardActionArea>
                  <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Project1" secondary="Jan 9, 2014" />
        <ListItemSecondaryAction >
        <IconButton>
        <Menu />
        </IconButton>
        
        </ListItemSecondaryAction>
        </ListItem>
                  </CardActionArea>
              </Card>
          </Grid>
          <Grid item xs={3}>
              <Card>
                  <CardActionArea>
                  <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Project1" secondary="Jan 9, 2014" />
        <ListItemSecondaryAction >
        <IconButton>
        <Menu />
        </IconButton>
        
        </ListItemSecondaryAction>
        </ListItem>
                  </CardActionArea>
              </Card>
          </Grid>
        </Grid>
        <Grid container justify="center" style={{marginTop:"2%"}} spacing={1}>
          <Grid item xs={3}>
              <Card>
                  <CardActionArea>
                  <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Project1" secondary="Jan 9, 2014" />
        <ListItemSecondaryAction >
        <IconButton>
        <Menu />
        </IconButton>
        
        </ListItemSecondaryAction>
        </ListItem>
                  </CardActionArea>
              </Card>
          </Grid>
          <Grid item xs={3}>
              <Card>
                  <CardActionArea>
                  <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Project1" secondary="Jan 9, 2014" />
        <ListItemSecondaryAction >
        <IconButton>
        <Menu />
        </IconButton>
        
        </ListItemSecondaryAction>
        </ListItem>
                  </CardActionArea>
              </Card>
          </Grid>
          <Grid item xs={3}>
              <Card>
                  <CardActionArea>
                  <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Project1" secondary="Jan 9, 2014" />
        <ListItemSecondaryAction >
        <IconButton>
        <Menu />
        </IconButton>
        
        </ListItemSecondaryAction>
        </ListItem>
                  </CardActionArea>
              </Card>
          </Grid>
        </Grid>
        
      </MuiThemeProvider>
    </>
  );
}
