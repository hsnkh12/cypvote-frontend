import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack'
import ElectionListItem from '../../components/ListItem/ElectionListItem';


export default function Elections() {

    return (
        <div style={{ backgroundColor: '#EEF7FF' }}>

            <Container >

                <br></br>
                <br></br>
                <Card style={{ boxShadow: 'none' }}>
                    <CardContent>
                        <Grid container style={{ padding: 10 }}>

                            <Grid item xs={12} md={4} lg={4} m={1}>
                                <TextField
                                    label="Search election"
                                    type="text"
                                    variant="outlined"
                                    style={{ backgroundColor: 'white' }}
                                    fullWidth
                                />

                            </Grid>
                            <Grid item xs={12} md={2} lg={2} m={1}>

                                <TextField
                                    value={null}
                                    select // tell TextField to render select
                                    label="Sort by"
                                    fullWidth
                                >
                                    <MenuItem key={1} value="test">
                                        Test 1
                                    </MenuItem>
                                    <MenuItem key={2} value="test2">
                                        Test 2
                                    </MenuItem>
                                </TextField>

                            </Grid>
                            <Grid item xs={12} md={2} lg={2} m={1}>

                                <TextField
                                    value={null}
                                    select // tell TextField to render select
                                    label="Status"
                                    fullWidth
                                >
                                    <MenuItem key={1} value="test">
                                        Test 1
                                    </MenuItem>
                                    <MenuItem key={2} value="test2">
                                        Test 2
                                    </MenuItem>
                                </TextField>

                            </Grid>
                            <Grid item container xs={12} md={3} lg={3} m={1} justifyContent="end">
                                <Button size={'large'} style={{ width: 120, height: '90%', backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>Search</Button>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>

                <br></br>

                <Card style={{ boxShadow: 'none', height: 800, overflow: 'auto' }}>
                    <CardContent >

                        <Container>

                            <ElectionListItem />
                            <ElectionListItem />
                            <ElectionListItem />
                            <ElectionListItem />
                            <ElectionListItem />
                            <ElectionListItem />
                            <ElectionListItem />
                            <ElectionListItem />

                        </Container>


                    </CardContent>
                </Card>

                <br></br>

                <Card style={{ boxShadow: 'none' }}>
                    <CardContent>

                        <Grid container>

                            <Grid item container xs={1} md={6} lg={6} alignItems={'center'} justifyContent="first">
                                <Button size={'large'} style={{ backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>First page</Button>
                            </Grid>

                            <Grid item container xs={1} md={6} lg={6} alignItems={'center'} justifyContent="end">
                                <Grid >

                                    <Button size={'large'} style={{ backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>Previous</Button>
                                    <span style={{marginLeft: 20, marginRight:20, fontSize: 18}}>1</span>
                                    <Button size={'large'} style={{ backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>Next</Button>
                                </Grid>
                            </Grid>

                        </Grid>

                    </CardContent>
                </Card>





            </Container>



        </div>
    )
}