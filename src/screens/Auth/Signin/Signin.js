import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';


export default function Signin() {
    return (
        <div style={{ backgroundColor: '#004378' }} >
            <Container style={{ paddingTop: 100, height: '85vh' }}>

                <Grid container justifyContent={'center'}>
                    <Grid item xs={12} sm={5} md={5}>

                        <form>

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <p style={{ fontSize: 25, color: 'white' }}>Login to CypVote</p>
                                    <hr style={{ color: '#7B7B7B', borderWidth: 0.4 }}></hr>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Email"
                                        type={'email'}
                                        variant="outlined"
                                        style={{ backgroundColor: 'white', borderRadius: 5 }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Password"
                                        type={'password'}
                                        variant="outlined"
                                        style={{ backgroundColor: 'white', borderRadius: 5 }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} mt={2}>
                                    <Button style={{color: 'white', textDecoration:'underline'}}>Forgot password?</Button>
                                </Grid>
                                <Grid item xs={12} mt={2}>
                                    <Button size={'large'} style={{ backgroundColor: '#1B639E', width: 150, color: 'white', textTransform: 'none' }}>Submit</Button>
                                </Grid>
                            </Grid>

                        </form>
                    </Grid>
                </Grid>

            </Container>

        </div>
    )
}