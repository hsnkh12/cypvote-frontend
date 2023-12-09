import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Grid from "@mui/material/Grid"


export default function SubmitVoteModal(props) {

    const {
        handleCloseModal,
        openModal
    } = props


    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle>Vote confirmation</DialogTitle>
            <DialogContent style={{ width: 450 }}>
                <DialogContentText>
                    Are you sure you want to vote for the following candidates:
                    <br></br>
                    <br></br>
                    <div >

                        <p style={{ fontWeight: 'bold', color: 'black' }}>Candidate name</p>

                        <hr style={{ color: '#7B7B7B', borderWidth: 0.4, width: '100%' }}></hr>

                    </div>
                    <br></br>
                    <br></br>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseModal} color="primary" style={{backgroundColor: '#004378', color: 'white'}}>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}