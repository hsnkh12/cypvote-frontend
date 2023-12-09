import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';


export default function CandidateBoxListItem() {


    const navigate = useNavigate()


    return (
        <Grid item xs={12} md={2.93} lg={2.93}>
            <Card style={{borderRadius: 10,border: '1px solid #E4E4E4', boxShadow: 'none'}}>

                <CardContent>
                    <Grid container gap={2}>

                        <Grid item container justifyContent={'center'}>
                            <div style={{ backgroundColor: 'gray', borderRadius: '50%', width: '150px', height: '150px' }}>
                            </div>
                        </Grid>

                        <Grid item container justifyContent={'center'} >

                            <Grid item container justifyContent={'center'}>
                                <p>Candidate name</p>
                            </Grid>
                            <Grid item container justifyContent={'center'}>
                                <Button onClick={()=>navigate('/candidates/1')} size={'large'} style={{ backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>View profile</Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}