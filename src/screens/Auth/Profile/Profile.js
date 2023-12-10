import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import React from 'react';
import CardActions from '@mui/material/CardActions'

export default function Profile() {

    return (

        <div style={{ backgroundColor: '#EEF7FF'}}>
            <Container >
                <br></br>
                <br></br>
                <Grid container justifyContent={'center'}>
                <Card style={{ borderRadius: 10, border: '1px solid #E4E4E4', boxShadow: 'none' , maxWidth: 900}}>
                    <CardContent>
                        <Container>
                            <Grid container spacing={5}>

                                {/* Title */}
                                <Grid item container>
                                    <p style={{ fontWeight: 'bold', fontSize: 30, color: '#004378' }}>Voter Profile</p>
                                </Grid>

                                {/* Form Fields */}
                                <Grid item container xs={12} md={12} lg={12} spacing={2}>
                                    {[
                                        { label: 'Username', value: 'Hassankh' },
                                        { label: 'First name', value: 'Hassan' },
                                        { label: 'Last name', value: 'El Abdallah' },
                                        { label: 'Email', value: 'Hassankh@gmail.com' },
                                        { label: 'Phone number', value: '533 2222 22 22' },
                                    ].map((field, index) => (
                                        <React.Fragment key={index}>
                                            <Grid item container xs={12} md={9} lg={9}>
                                                <TextField
                                                    label={field.label}
                                                    type="text"
                                                    variant="outlined"
                                                    value={field.value}
                                                    style={{ backgroundColor: 'white', borderRadius: 5 }}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item container xs={12} md={2} lg={2}>
                                                <Button size={'large'} fullWidth style={{ backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>
                                                    Update
                                                </Button>
                                            </Grid>
                                        </React.Fragment>
                                    ))}
                                </Grid>
                            </Grid>
                        </Container>
                    </CardContent>
                    <br></br>
                    <br></br>
                    <CardActions style={{ justifyContent: 'flex-end' }}>
                        <Button size="large" style={{ backgroundColor: '#1B639E', color: 'white', textTransform: 'none', marginLeft: 'auto' }}>
                            Change Password
                        </Button>
                        <Button size="large" style={{ backgroundColor: '#901A1A', color: 'white', textTransform: 'none' }}>
                            Delete Account
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
            </Container>
        </div >
    )
}