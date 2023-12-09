import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'


export default function CandidateInfo() {

    return (
        <Card style={{borderRadius: 10,border: '1px solid #E4E4E4', boxShadow: 'none'}}>

            <CardContent >

                <Container>
                    <Grid container >

                        <Grid container item xs={12} md={8} lg={8} justifyContent={'start'} style={{ textAlign: 'start' }}>

                            <Grid item container md={12} lg={12}>
                                <p style={{ fontSize: 27, fontWeight: 'bold', color: '#004378', marginBottom: 0 }}>Candidate name</p>
                            </Grid>
                            <Grid item container>

                                <p><span style={{ fontWeight: 'bold' }}>First name</span>: Hassan</p>
                            </Grid>
                            <Grid item container>
                                <p><span style={{ fontWeight: 'bold' }}>Last name</span>: El Abdallah</p>
                            </Grid>

                            <Grid item container >
                                <p><span style={{ fontWeight: 'bold' }}>Email</span>: hassankh613@gmail.com</p>
                            </Grid>

                            <Grid item container >
                                <p><span style={{ fontWeight: 'bold' }}>Id</span>: 734</p>
                            </Grid>
                            <Grid item container >
                                <p style={{ color: '#004378' }}>2 elections involved</p>
                            </Grid>

                        </Grid>


                        <Grid container item xs={12} md={4} lg={4} justifyContent={'center'} alignContent={'center'}>


                            <div style={{ backgroundColor: 'gray', borderRadius: '50%', width: '200px', height: '200px' }}>
                            </div>


                        </Grid>


                    </Grid>
                </Container>

            </CardContent>

        </Card>
    )
}