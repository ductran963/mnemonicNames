import React, { useState, useEffect, Component } from "react";
// import React, { Component } from "react";
import "../App.css";
// import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
// import React from 'react';
import AppBar from '@material-ui/core/AppBar';

// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import API from "../utils/API"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// class App extends Component {
//   render() {
//     return (
//       <Typography variant="body2" color="textSecondary" align="center">
//         {'Copyright © '}
//         <Link color="inherit" href="https://material-ui.com/">
//           Your Website
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }
// }



 function Clients() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();


// Setting our component's initial state
const [clients, setClients] = useState([])
const [formObject, setFormObject] = useState({})

// Load all clients and store them with setClients
useEffect(() => {
    loadClients()
}, [])

// Loads all clients and sets them to clients
function loadClients() {
    API.getClients()
        .then(res =>
         
            setClients(res.data),
            console.log("hello")
            
        )
        .catch(err => console.log(err));
};



  return (
    <React.Fragment>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>

            
            {cards.map(client => (
              <Grid item key={client.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {client.name}
                      
                      </Typography>
                    <Typography>
                      
                     {client.specialNotes}
                      </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                      </Button>
                    <Button size="small" color="primary">
                      Edit
                      </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
          </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Add links or copy right info
          </Typography>

      </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
}


export default Clients;
