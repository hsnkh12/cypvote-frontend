import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';


export default function SearchCandidate() {


    return (
        <Card style={{borderRadius: 10,border: '1px solid #E4E4E4', boxShadow: 'none',}}>

            <CardContent >
                <Grid container >

                    <Grid item xs={12} md={4} lg={4} justifyContent={'start'}>
                        <TextField
                            label="Search candidate"
                            type="text"
                            variant="outlined"
                            style={{ backgroundColor: 'white', borderRadius: 5 }}
                            fullWidth
                        />

                    </Grid>

                    <Grid item container xs={12} md={8} lg={8} alignItems={'center'} justifyContent={'end'}>

                        <p style={{ fontWeight: 'bold' }}>2 selected</p>

                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    )

}