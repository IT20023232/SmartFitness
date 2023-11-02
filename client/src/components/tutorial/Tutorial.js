import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player';

import AddTutorial from './add-tutorial/Addtutoral';
import './Tutorial.css';
import { BackendUrl } from '../../routes/backend';
import DeleteForm from './delete-tutorial/Deletetutorial';
import EditTutorial from './edit-tutorial/Edittutorial';


const WeightTrainingCard = ({tuteid, topic, description, photo, video }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  

  return (
    <Card sx={{ minWidth: 300, maxWidth: 300, backgroundColor: 'black', margin: '20px',borderRadius:'10px' }}>

      <CardMedia
        onClick={handleOpenModal}
        sx={{ height: 150 ,objectFit:"cover"}}
        image={photo}
        title={topic}
      >
        <div className='description-hov'> 
         <b> {description}</b>
        </div>
      </CardMedia>
      <CardContent>

        <Typography sx={{ color: 'white' }} variant="body2" color="text.secondary">
          {topic}
        </Typography>
      </CardContent>
      <div className='buttonset'>
        <CardActions  >
          <Button sx={{ color: 'white' }} onClick={handleOpenModal} size="small" className='vewbutton'>Play</Button>
          <EditTutorial id={tuteid} topic={topic} description={description} photo={photo} video={video}/>
          <DeleteForm id={tuteid}/>
        </CardActions>
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div>
              <div>
                <ReactPlayer
                  url={video}
                  controls // Enable player controls (play, pause, etc.)
                  width="1000PX" // Set the width of the player
                  height="650PX" // Automatically adjust the height to maintain the aspect ratio
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </Card>


  );
};


const Tutorial = () => {
  const [weightTrainingData, setWeightTrainingData] = useState([]);

  useEffect(() => {
    // Replace this URL with the actual API endpoint for fetching weight training data
    const apiUrl = BackendUrl+'weighttraining/';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Assuming the response contains an array of weight training data
        setWeightTrainingData(data.existingWeighttraining)
        console.log(data.existingWeighttraining);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Include dependencies as needed

  return (
    <div>
    <AddTutorial />
           
    <div className="card-list">
      {weightTrainingData.map((item, index) => (
        <WeightTrainingCard
          key={index}
          tuteid={item._id}
          topic={item.topic}
          description={item.discription}
          photo={item.photo}
          video={item.vedeo}
        />
      ))}
    </div>
    </div>
  );
};

export default Tutorial;
