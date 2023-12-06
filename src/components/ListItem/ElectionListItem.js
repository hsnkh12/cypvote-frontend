
import Grid from '@mui/material/Grid';


export default function ElectionListItem() {


    return (
        <>
            <Grid container >

                <Grid container item xs={12} md={4} lg={4} >

                    <Grid item container>

                        <Grid item xs={4} md={4} lg={4} style={{ padding: 0 }}>
                            <p style={{ fontWeight: 'bold' }}>Election title</p>
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
            <hr style={{ color: '#7B7B7B', borderWidth: 0.4 }}></hr>
        </>
    )
}