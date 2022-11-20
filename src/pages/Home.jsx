import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import ButtonAppBar from '../components/navbar'
import { Login } from '../components/Login';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';

function Home() {
    const Navigate = useNavigate();
    const [isSignedIn, setIsSignedIn] = useState(false);
    
    
    useEffect(() => {
       
        Auth.currentAuthenticatedUser()
            .then(res => {
            setIsSignedIn(res);
            })
            .catch(err => {
                console.warn(err);
            })
    },[])
    
    console.log(isSignedIn)
   const beSponsor = () => {
        Navigate("/login")
    }
    if (isSignedIn) {
        Navigate("/profile")
    }
    return (
        <>
            <Grid container component="main" spacing={2} sx={{ height: '70vh', width: '60vw' }}>
                <Grid xs={12}>
                    <ButtonAppBar />
                </Grid>
                <Grid item sm={12} md={8}
                >
                    <Card >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://source.unsplash.com/random/?veteran"
                            sx={{ padding: "2em 2em 2em 2em", objectFit: "fit" , height:'80vh'}}
                        >
                        </CardMedia>
                    </Card>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Card sx={{ minWidth: 275, backgroundColor: "#575741" }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={logo}
                            sx={{ padding: "2em 2em 2em 2em", objectFit: "contain" }}
                        />
                        <CardContent >
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Help combat homelessness in the veteran community
                            </Typography>
                            <Typography variant="body2">
                                <List>
                                    <ListItem>
                                        <ListItemText>
                                            <Typography>
                                                1. Identify homeless veteran in your local area.
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            <Typography>
                                                2. Connect with veteran
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            <Typography>
                                                3. Input vetran information into database.
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            <Typography>
                                                4. Obtain military records
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            <Typography>
                                                5. Enroll veteran in the VA system.
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            <Typography>
                                                6. Provide assistance in other areas (health, education, employment)
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            <Typography>
                                                7. Close out case
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>  
                                </List>
                                <br />
                                {'**Limited to four (4) sponsorship at a time**'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={beSponsor}>Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Home