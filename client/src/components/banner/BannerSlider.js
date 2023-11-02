// src/components/BannerSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BannerSlider.css'; // Create a separate CSS file for styling

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 7000,
  };

  const bannerImages = [
    'https://womensfitness.co.uk/wp-content/uploads/sites/3/2023/01/shutterstock_587832047.jpg',
    'https://www.regymenfitness.com/wp-content/uploads/2020/08/group-workout.jpg',
    'https://media.cnn.com/api/v1/images/stellar/prod/221221132301-exercise-workouts-menstrual-cycle-wellness-stock.jpg?c=original',
    // Add more image URLs here
  ];

  return (
    <Slider {...settings}>
      {bannerImages.map((image, index) => (
        <div key={index} className="banner-slide">
          <div className="ribbon">
            <br></br><div className="logo-dash"><img  src='./logo.png' alt="Logo" /></div><br></br>
            <h1>Welcome To Smart Fitness !!!</h1>
            <br></br>
            <h3>Being physically active can improve your brain health,<br></br>
              help manage weight, <br></br>reduce the risk of disease,
              <br></br> strengthen bones and muscles,<br></br>
              and improve your ability to do everyday activities</h3>
              <br></br><br></br><br></br>
              <a href='/tutorial' ><button className="custom-button"><h1><b>START NOW</b></h1></button></a>

          </div>
          <img src={image} alt={`Banner ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default BannerSlider;

