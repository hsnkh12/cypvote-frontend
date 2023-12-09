import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';


export default function Profile() {

    return (

        <div style={{ backgroundColor: '#EEF7FF' }}>

            <Container>

                <br></br>
                <br></br>


                <Card style={{ height: 700, borderRadius: 10, border: '1px solid #E4E4E4', boxShadow: 'none' }}>

                    <CardContent>

                        <Container>

                            <Grid container gap={5}>

                                <Grid item container >
                                    <p style={{ fontWeight: 'bold', fontSize: 30, color: '#004378' }}>Voter Profile</p>
                                </Grid>

                                <Grid item container sm={12} md={12} lg={12} >

                                    <Grid item container sm={12} md={9} lg={9}>
                                        <TextField
                                            label="Username"
                                            type="text"
                                            variant="outlined"
                                            value={'Hassankh'}
                                            style={{ backgroundColor: 'white' }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item container sm={12} md={3} lg={3}>
                                        <Button size={'large'} style={{ backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>Update</Button>
                                    </Grid>


                                </Grid>

                                <Grid item container sm={12} md={12} lg={12} >
                                    <Grid item container sm={12} md={9} lg={9}>
                                        <TextField
                                            label="First name"
                                            type="text"
                                            variant="outlined"
                                            value={'Hassan'}
                                            style={{ backgroundColor: 'white' }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item container sm={12} md={3} lg={3}>
                                        <Button size={'large'} style={{ backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>Update</Button>
                                    </Grid>


                                </Grid>

                                <Grid item container sm={12} md={12} lg={12} >

                                    <Grid item container sm={12} md={9} lg={9}>
                                        <TextField
                                            label="Last name"
                                            type="text"
                                            variant="outlined"
                                            value={'El Abdallah'}
                                            style={{ backgroundColor: 'white' }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item container sm={12} md={3} lg={3}>
                                        <Button size={'large'} style={{ backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>Update</Button>
                                    </Grid>


                                </Grid>

                                <Grid item container sm={12} md={12} lg={12} >

                                    <Grid item container sm={12} md={9} lg={9}>
                                        <TextField
                                            label="Email"
                                            type="text"
                                            variant="outlined"
                                            value={'Hassankh@gmail.com'}
                                            style={{ backgroundColor: 'white' }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item container sm={12} md={3} lg={3}>
                                        <Button size={'large'} style={{ backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>Update</Button>
                                    </Grid>


                                </Grid>


                                <Grid item container sm={12} md={12} lg={12} >

                                    <Grid item container sm={12} md={9} lg={9}>
                                        <TextField
                                            label="Phone number"
                                            type="text"
                                            variant="outlined"
                                            value={'533 2222 22 22'}
                                            style={{ backgroundColor: 'white' }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item container sm={12} md={3} lg={3}>
                                        <Button size={'large'} style={{ backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>Update</Button>
                                    </Grid>


                                </Grid>

                                <Grid item container>

                                </Grid>


                            </Grid>
                        </Container>
                    </CardContent>
                </Card>


            </Container>


        </div>
    )
}