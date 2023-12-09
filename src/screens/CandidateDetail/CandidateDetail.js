import CandidateInfo from "../../sections/Candidates/CandidateInfo";
import Container from '@mui/material/Container'
import ElectionsList from '../../sections/Elections/ElectionsList'

export default function CandidateDetail() {

    return (
        <div style={{ backgroundColor: '#EEF7FF' }}>

            <Container>
                <br></br>
                <br></br>

                <CandidateInfo />

                <br></br>

                <ElectionsList />


            </Container>

        </div>
    )
}