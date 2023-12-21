import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import Pagination from '../../components/Pagination/Pagination'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import ElectionInfo from '../../sections/Elections/ElectionInfo'
import SearchCandidate from '../../sections/Elections/SearchCandidate'
import CandidateListItem from '../../components/ListItem/CandidateListItem'
import { Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material';
import { useEffect, useState } from 'react'
import SubmitVoteModal from '../../components/Modal/SubmitVoteModal'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function ElectionDetail(props) {


    const [openModal, setOpenModal]= useState(false);
    const navigate = useNavigate()
    const [election, setElection] = useState({})
    const { election_id } = useParams();

    const fetchElection = async () => {

        try{
            const token = localStorage.getItem('token')
            const response = await axios.get("http://localhost:8080/elections"+election_id, {
                headers: {
                    Authorization: 'Bearer '+token
                }
            })
            console.log(response.data)
            setElection(response.data)

        } catch (err){
            if(err.response.status === 403){
                navigate('/auth/login')
            }
            console.log(err)
        }
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    useEffect(() => {

        fetchElection()
    }, [])

    return (
        <div style={{ backgroundColor: '#EEF7FF' }}>

            <Container >

                <SubmitVoteModal 
                    openModal = {openModal}
                    handleCloseModal = {handleCloseModal}
                />

                <br></br>
                <br></br>

                <ElectionInfo 
                    handleOpenModal = {handleOpenModal} 
                />

                <br></br>

                <SearchCandidate />

                <br></br>

                <Card style={{ height: 700, overflow: 'auto' ,border: '1px solid #E4E4E4', boxShadow: 'none'}}>

                    <CardContent >

                        <Container>

                            <RadioGroup
                                aria-label="gender"
                                name="gender"
                            >

                                <CandidateListItem
                                    formControlElement={<FormControlLabel value="1" control={<Radio size='large' />} />}
                                />
                                <CandidateListItem
                                    formControlElement={<FormControlLabel value="2" control={<Radio size='large' />} />}
                                />
                                <CandidateListItem
                                    formControlElement={<FormControlLabel value="3" control={<Radio size='large' />} />}
                                />
                                <CandidateListItem
                                    formControlElement={<FormControlLabel value="4" control={<Radio size='large' />} />}
                                />

                            </RadioGroup>
                        </Container>
                    </CardContent>

                </Card>


            </Container>
        </div>
    )
}