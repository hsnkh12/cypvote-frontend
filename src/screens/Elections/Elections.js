import Container from '@mui/material/Container'
import Pagination from '../../components/Pagination/Pagination';
import ElectionFilter from '../../sections/Elections/ElectionFilter';
import ElectionsList from '../../sections/Elections/ElectionsList';

export default function Elections() {

    return (
        <div style={{ backgroundColor: '#EEF7FF' }}>

            <Container >

                <br></br>
                <br></br>

                <ElectionFilter /> 

                <br></br>

                <ElectionsList /> 

                <br></br>

                <Pagination /> 


            </Container>
        </div>
    )
}