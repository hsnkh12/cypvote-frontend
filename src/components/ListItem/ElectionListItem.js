
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function ElectionListItem() {


    const navigate = useNavigate()


    return (
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/elections/1'}>
            <Grid container>

                <Grid container item xs={12} md={4} lg={4} >

                    <Grid item container>

                        <Grid item xs={4} md={4} lg={4} style={{ padding: 0 }}>
                            <p style={{ fontWeight: 'bold', color: '#004378'}}>Election title</p>
                        </Grid>
                        <Grid item xs={4} md={4} lg={4} style={{ marginTop: 1 }}>
                            <p style={{ fontSize: 15 }}>Election type</p>
                        </Grid>
                        <Grid item xs={4} md={4} lg={4} style={{ marginTop: 1 }}>
                            <p style={{ fontSize: 15 }}>10 candidates</p>
                        </Grid>

                    </Grid>
                    <Grid item container >
                        <Grid item xs={4} md={4} lg={4}>
                            <p style={{ fontSize: 15 }}>17 May 2016</p>
                        </Grid>
                        <Grid item xs={1} md={1} lg={1}>
                            <p>-</p>
                        </Grid>
                        <Grid item xs={4} md={4} lg={4}>
                            <p style={{ fontSize: 15 }}>27 May 2016</p>
                        </Grid>
                    </Grid>


                </Grid>

                <Grid container item xs={12} md={8} lg={8} alignItems={'center'} justifyContent="end">
                    <p style={{ fontSize: 18 }}>10 days left</p>
                </Grid>

            </Grid>
        </Link>
    )
}