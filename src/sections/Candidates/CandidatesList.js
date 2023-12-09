import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import CandidateBoxListItem from '../../components/ListItem/CandidateBoxListItem';

export default function CandidatesList() {

    return (
        <Grid container gap={1}>

            <CandidateBoxListItem />
            <CandidateBoxListItem />
            <CandidateBoxListItem />
            <CandidateBoxListItem />
        </Grid>
    )
}