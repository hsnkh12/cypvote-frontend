
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';

export default function CandidateListItem(props) {

    const {
        formControlElement
    } = props

    const navigate = useNavigate()

    return (
        <>
            <Grid container m={1}>

                <Grid container item xs={12} md={4} lg={4}>

                    <Grid item container xs={12} md={4} lg={4}>

                        <div style={{ backgroundColor: 'gray', borderRadius: '50%', width: '80px', height: '80px' }}>
                        </div>


                    </Grid>
                    <Grid item container xs={12} md={8} lg={8}>

                        <Grid item container>
                            <p>Candidate name</p>
                        </Grid>
                        <Grid item container>
                            <Button onClick={()=>navigate('/candidates/1')} style={{ color: '#004378', textTransform: 'none', padding: 0}}>View profile</Button>
                        </Grid>

                    </Grid>


                </Grid>

                <Grid container item xs={12} md={8} lg={8} alignItems={'center'} justifyContent="end">
                    {formControlElement}
                </Grid>

            </Grid>
            <hr style={{ color: '#7B7B7B', borderWidth: 0.4, width: '100%' }}></hr>
        </>
    )
}