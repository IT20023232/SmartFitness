import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ErrorAlert, SuccessAlert } from '../../Alert/Alertmsj';
import ReactPlayer from 'react-player';
import './Addtutorial.css';
import { BackendUrl } from '../../../routes/backend';

const AddTutorial = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alertmodel, setalertModel] = useState(false);
    const [formData, setFormData] = useState({
        topic: '',
        discription: '',
        photo: '',
        vedeo: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const openModal = () => {
        setIsModalOpen(true);
    };
 
    const closeModal = () => {
        setIsModalOpen(false);
    };
 
    const AlertCloseModal = () => {
        setalertModel(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        if (successMessage) {
          const successMessageTimeout = setTimeout(() => {
            setSuccessMessage('');
          }, 3000); // 5000 milliseconds = 5 seconds
    
          return () => clearTimeout(successMessageTimeout);
        }
    
        if (errorMessage) {
          const errorMessageTimeout = setTimeout(() => {
            setErrorMessage('');
          }, 3000); // 5000 milliseconds = 5 seconds
    
          return () => clearTimeout(errorMessageTimeout);
        }
      }, [successMessage, errorMessage]);

    const handleSubmit = async (e) => {
        // Handle form submission here, e.g., send data to an API or perform other actions
        console.log(formData);
        e.preventDefault();

        try {
            const response = await fetch(BackendUrl+'weighttraining/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                setSuccessMessage('Done. Tutorial detais saved successfully');
                setErrorMessage('');

                setFormData({
                    topic: '',
                    discription: '',
                    photo: '',
                    vedeo: '',
                });

            } else {
                const data = await response.json();
                setSuccessMessage('');
                setErrorMessage(data.error);
            }
        } catch (error) {
            setSuccessMessage('');
            setErrorMessage('An error occurred while submitting the form.');
        }
        closeModal();
        setTimeout(() => {
            window.location.reload();
            
        }, 3000);
        // Close the modal after submission
        
    };

    return (
        <div>
            <button className='model-butten' onClick={openModal}><FontAwesomeIcon icon={faPlus} /></button>
            {successMessage ? (
                 <Modal open={true} onClose={AlertCloseModal}>
                 <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                     <SuccessAlert msj={successMessage}/>
                 </div>
             </Modal>
            ) : errorMessage ? (
                <Modal open={true} onClose={AlertCloseModal}>
                <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <ErrorAlert msj={errorMessage}/>
                </div>
                </Modal>
            ) : null}
           
         
            <Modal open={isModalOpen} onClose={closeModal}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div className='add-tutte-background'>

                        <div className="add-tute-form">
                            <h2>Add Tutorial</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="topic"
                                    placeholder="Topic"
                                    value={formData.topic}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="discription"
                                    placeholder="Description"
                                    value={formData.discription}
                                    onChange={handleChange}
                                    required
                                />
                                {/* topic, description, photo, video */}
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Photo Url"
                                    value={formData.photo}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="vedeo"
                                    placeholder="Video Url"
                                    value={formData.vedeo}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="centered-video-player">
                                <img src={formData.photo} width="140PX" height="150PX" className='img-box'></img>
                                    <ReactPlayer
                                        url={formData.vedeo}
                                        controls
                                        width="150PX"
                                        height="150px"
                                        className="video-player"
                                    />
                                </div>

                                <button type="submit">Add</button>

                                <button onClick={closeModal}>Cancel</button>
                            </form>

                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default AddTutorial;
