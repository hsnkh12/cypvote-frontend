import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function CandidatesFilter(){

    return (
        <Card style={{borderRadius: 10,border: '1px solid #E4E4E4', boxShadow: 'none'}}>
            <CardContent>
                <Grid container >

                    <Grid item xs={12} md={4} lg={4} m={1}>
                        <TextField
                            label="Search candidates"
                            type="text"
                            variant="outlined"
                            style={{ backgroundColor: 'white', borderRadius: 5 }}
                            fullWidth
                        />

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
                    <Grid item container xs={12} md={5} lg={5} m={1} justifyContent="end">
                        <Button size={'large'} style={{ width: 120,  backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>Search</Button>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}