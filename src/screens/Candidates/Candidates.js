import CandidatesFilter from "../../sections/Candidates/CandidatesFilter";
import Container from '@mui/material/Container'
import CandidatesList from "../../sections/Candidates/CandidatesList";

export default function Candidates() {

    return (
        <div style={{ backgroundColor: '#EEF7FF' }}>

            <Container >
                <br></br>
                <br></br>

                <CandidatesFilter />
                <br></br>

                <CandidatesList />


            </Container>
        </div>
    )
}