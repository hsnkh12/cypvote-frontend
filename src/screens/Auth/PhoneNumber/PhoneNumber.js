import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';


export default function PhoneNumber(){


    return (
        <div style={{ backgroundColor: '#004378' }} >
            <Container style={{ paddingTop: 100, height: '85vh' }}>

                <Grid container justifyContent={'center'}>
                    <Grid item xs={12} sm={5} md={5}>

                        <form>

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <p style={{ fontSize: 25, color: 'white' }}>Phone number verification</p>
                                    <hr style={{ color: '#7B7B7B', borderWidth: 0.4 }}></hr>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="SMS code"
                                        variant="outlined"
                                        style={{ backgroundColor: 'white', borderRadius: 5 }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} mt={2}>
                                    <Button size={'large'} style={{ backgroundColor: '#1B639E', width: 150, color: 'white', textTransform: 'none', marginRight: 5}}>Verify</Button>
                                    <Button size={'large'} style={{ backgroundColor: '#1B638E', width: 150, color: 'white', textTransform: 'none' }}>Resend</Button>
                                </Grid>
                            </Grid>

                        </form>
                    </Grid>
                </Grid>

            </Container>

        </div>
    )
}