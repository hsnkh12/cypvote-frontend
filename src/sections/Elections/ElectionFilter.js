import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function ElectionFilter(props) {

    const {
        filter,
        setQueryFilter
    } = props 

    const [formValues, setFormValues] = useState({
        ...filter
    })

    const handleFormChange = (e) => {

        let value = e.target.value 
        const name = e.target.name
        const prev = {...formValues}

        prev[name] = value 

        setFormValues(prev)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setQueryFilter(formValues)
    }




    return (
        <Card style={{borderRadius: 10,border: '1px solid #E4E4E4', boxShadow: 'none'}}>
            <CardContent>
                <form onSubmit={handleFormSubmit}>
                <Grid container>

                    <Grid item xs={12} md={3} lg={3} m={1}>
                        <TextField
                            label="Search election"
                            type="text"
                            variant="outlined"
                            style={{ backgroundColor: 'white', borderRadius: 5 }}
                            name = "title"
                            value = {formValues.election_title}
                            onChange = {handleFormChange}
                            fullWidth
                        />

                    </Grid>
                    <Grid item xs={12} md={2} lg={2} m={1}>

                        <TextField
                            type = {'date'}
                            value={formValues.start_date}
                            name = "start_date"
                            onChange={handleFormChange}
                            InputLabelProps={{ shrink: true }}
                            label="Start date"
                            fullWidth

                        >
                        </TextField>

                    </Grid>
                    <Grid item xs={12} md={2} lg={2} m={1}>

                        <TextField
                            type = {'date'}
                            value={formValues.end_date}
                            name = "expected_end_date"
                            onChange={handleFormChange}
                            InputLabelProps={{ shrink: true }}
                            label="End date"
                            fullWidth
                            

                        >
                        </TextField>

                    </Grid>
                    <Grid item xs={12} md={1} lg={1} m={1}>

                        <TextField
                            value={formValues.status}
                            name = {'status'}
                            onChange={handleFormChange}
                            select // tell TextField to render select
                            label="Status"
                            fullWidth
                        >
                            <MenuItem key={1} value="S">
                                Started
                            </MenuItem>
                            <MenuItem key={2} value="E">
                                Ended
                            </MenuItem>
                        </TextField>

                    </Grid>

                    <Grid item container xs={12} md={3} lg={3} m={1} justifyContent="end">
                        <Button  type={'submit'} size={'large'} style={{ width: 120, backgroundColor: '#004378', color: 'white', textTransform: 'none' }}>Search</Button>
                    </Grid>

                </Grid>
                </form>
            </CardContent>
        </Card>
    )
}