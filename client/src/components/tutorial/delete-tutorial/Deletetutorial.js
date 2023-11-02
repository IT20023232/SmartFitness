import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { ErrorAlert, SuccessAlert, WorningAlert } from '../../Alert/Alertmsj';
import Button from '@mui/material/Button';


import './Deletetutorial.css';
import { BackendUrl } from '../../../routes/backend';
import { Alert, AlertTitle, Stack } from '@mui/material';



const DeleteForm = ({ id }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alertmodel, setalertModel] = useState(false);

    const [successMessagedel, setSuccessMessagedel] = useState('');
    const [errorMessagedel, setErrorMessagedel] = useState('');

    const [formData, setFormData] = useState({
        tid: '',
    });



    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const AlertCloseModal = () => {
        setalertModel(false);
    };


    useEffect(() => {
        if (successMessagedel) {
            const successMessageTimeout = setTimeout(() => {
                setSuccessMessagedel('');
            }, 150000); // 5000 milliseconds = 5 seconds

            return () => clearTimeout(successMessageTimeout);
        }

        if (errorMessagedel) {
            const errorMessageTimeout = setTimeout(() => {
                setErrorMessagedel('');
            }, 150000); // 5000 milliseconds = 5 seconds

            return () => clearTimeout(errorMessageTimeout);
        }
    }, [successMessagedel, errorMessagedel]);

    const handleSubmit = async () => {

        try {
            const response = await fetch(BackendUrl +`weighttraining/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                setSuccessMessagedel('Weight training record deleted successfully');
                setErrorMessagedel('');
                
            } else {
                const data = await response.json();
                setSuccessMessagedel('');
                setErrorMessagedel(data.message);
            }
        } catch (error) {
            setSuccessMessagedel('');
            setErrorMessagedel('An error occurred while deleting the record.');
        }
        closeModal();
        
    };

    

    return (
        <div>
            <Button onClick={openModal} sx={{ color: 'white' }} size="small" className='delbutton'>Delete</Button>

            
            {successMessagedel ? (
                <Modal open={true} onClose={AlertCloseModal}>
                    <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <SuccessAlert msj={successMessagedel} />
                    </div>
                </Modal>
            ) : errorMessagedel ? (
                <Modal open={true} onClose={AlertCloseModal}>
                    <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <ErrorAlert msj={errorMessagedel} />
                    </div>
                </Modal>
            ) : null}

            <Modal open={isModalOpen} onClose={closeModal}>
                <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Stack>
                        <Alert severity="warning">
                            <AlertTitle>Warning</AlertTitle>
                            Are you want to delete tutorial — <strong>press YES for confirm!</strong>
                            <br></br>
                            <br></br>
                            <div className='button-center'>
                                <form onSubmit={handleSubmit}>

                                    <Button type="submit" variant="outlined" color="success">
                                        YES
                                    </Button>
                                    <Button onClick={closeModal} variant="outlined" color="error">
                                        NO
                                    </Button>
                                </form>
                            </div>
                        </Alert>
                    </Stack>
                </div>
            </Modal>


        </div>
    );
};

export default DeleteForm;
