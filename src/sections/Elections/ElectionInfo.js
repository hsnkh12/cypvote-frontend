import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

export default function ElectionInfo(props) {


    const {
        handleOpenModal
    } = props

    return (
        <Card style={{ border: '1px solid #E4E4E4', boxShadow: 'none', borderRadius: 10}}>

            <CardContent >

                <Container>
                    <Grid container >

                        <Grid container item xs={12} md={6} lg={6} justifyContent={'start'} style={{ textAlign: 'start' }} gap={2}>

                            <Grid item container md={12} lg={12}>
                                <p style={{ fontSize: 27, fontWeight: 'bold', color: '#004378', marginBottom: 0}}>Election title</p>
                            </Grid>
                            <Grid item container>

                                <span style={{ marginRight: 10 }}>Election type</span>
                            </Grid>
                            <Grid item container>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.</p>
                            </Grid>

                            <Grid item container >
                                <span style={{ marginRight: 10 }}>17 May 2016</span>
                                <span style={{ marginRight: 10 }}>-</span>
                                <span >27 May 2016</span>
                            </Grid>

                            <Grid item container >
                                <span style={{ fontWeight: 'bold' }}>2 candidate allowed</span>
                            </Grid>

                        </Grid>


                        <Grid container item xs={12} md={6} lg={6} >

                            <Grid item container justifyContent="end" alignContent={'flex-start'}>
                                <p style={{ fontSize: 23 }}>10 days left</p>
                            </Grid>

                            <Grid item container alignItems={'center'} justifyContent="end" alignContent={'flex-end'}>
                                <Button size={'large'} onClick={handleOpenModal} style={{ backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>Submit vote</Button>
                            </Grid>

                        </Grid>


                    </Grid>
                </Container>

            </CardContent>

        </Card>
    )
}