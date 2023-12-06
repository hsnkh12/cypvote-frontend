import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import dvs_image4 from '../../assets/dvs_image4.jpeg'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';


export default function Section4() {

    return (
        <div style={{ backgroundColor: '#EEF7FF' }}>

            <Container style={{ paddingTop: 60 }}>

                <Grid container >
                    <Grid item container xs={12} md={5} lg={5} >
                        <img src={dvs_image4} alt='img'></img>
                    </Grid>

                    <Grid item xs={2} md={2} lg={2}></Grid>
                    <Grid item container xs={12} md={5} lg={5} alignItems={'center'}>

                        <Grid container gap={2}>

                            <Grid item xs={12} md={10} lg={10}>
                                <TextField
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    style={{ backgroundColor: 'white' }}
                                    fullWidth
                                    size='small'
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={10} lg={10}>
                                <TextField
                                    label="Full Name"
                                    variant="outlined"
                                    style={{ backgroundColor: 'white' }}
                                    fullWidth
                                    size='small'
                                    required
                                />
                            </Grid>

                            <Grid item xs={12} md={10} lg={10}>
                                <TextareaAutosize
                                    placeholder="Message"
                                    style={{ width: '100%', padding: 10, backgroundColor: 'white', height: 200 }}
                                    required
                                />
                            </Grid>

                            <Grid item container xs={12} md={10} lg={10} alignItems={'start'}>
                                <Button style={{ width: 100, backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>Send</Button>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>


            </Container>

        </div>
    )
}