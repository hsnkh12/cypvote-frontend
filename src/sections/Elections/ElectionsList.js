import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container'
import ElectionListItem from '../../components/ListItem/ElectionListItem';

export default function ElectionsList() {


    return (
        <Card style={{ borderRadius: 10,height: 800, overflow: 'auto',border: '1px solid #E4E4E4', boxShadow: 'none'}}>
            <CardContent >

                <Container>

                    <ElectionListItem />
                    <hr style={{ color: '#7B7B7B', borderWidth: 0.4 }}></hr>
                    <ElectionListItem />
                    <hr style={{ color: '#7B7B7B', borderWidth: 0.4 }}></hr>
                    <ElectionListItem />
                    <hr style={{ color: '#7B7B7B', borderWidth: 0.4 }}></hr>
                    <ElectionListItem />
                    <hr style={{ color: '#7B7B7B', borderWidth: 0.4 }}></hr>
                    <ElectionListItem />
                    <hr style={{ color: '#7B7B7B', borderWidth: 0.4 }}></hr>
                    <ElectionListItem />
                    <hr style={{ color: '#7B7B7B', borderWidth: 0.4 }}></hr>
                    <ElectionListItem />
                    <hr style={{ color: '#7B7B7B', borderWidth: 0.4 }}></hr>
                    <ElectionListItem />

                </Container>


            </CardContent>
        </Card>
    )
}