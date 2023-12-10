import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'


export default function Pagination() {

    return (
        <Card style={{ borderRadius: 10, border: '1px solid #E4E4E4', boxShadow: 'none' }}>
      <CardContent>
        <Grid container>

          <Grid item container xs={12} md={6} lg={6} justifyContent={'start'}>
            <Button
              size="large"
              style={{ backgroundColor: '#004378', color: 'white', textTransform: 'none' }}
            >
              First Page
            </Button>
          </Grid>

          {/* Pagination Buttons */}
          <Grid item xs={12} md={6} lg={6} container justifyContent="flex-end" alignItems="center">
            <Button size="large" style={{ backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>
              Previous
            </Button>
            <span style={{ marginLeft: 20, marginRight: 20, fontSize: 18 }}>1</span>
            <Button size="large" style={{ backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>
              Next
            </Button>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
    )
}