import React, { useState, useEffect } from 'react';
import LoggedInHeader from '../components/LoggedInHeader';
import axios from 'axios';
import Slider from 'react-slick';
// import 'dotenv/config'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LoggedHome = () => {
  // const [medicalImages, setMedicalImages] = useState([]);
  // const [medicalArticles, setMedicalArticles] = useState([]);
  // // const apiKeys = process.env.REACT_APP_NEWS_API_KEY;

  // useEffect(() => {
  //   // Fetch medical images from Unsplash API
  //   // axios
  //   //   .get('https://api.unsplash.com/photos/random', {
  //   //     params: {
  //   //       query: 'medical',
  //   //       count: 5,
  //   //       client_id: 'YOUR_UNSPLASH_API_KEY',
  //   //     },
  //   //   })
  //   //   .then((response) => {
  //   //     setMedicalImages(response.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error('Error fetching medical images:', error);
  //   //   });

  //   // Fetch medical articles from News API
  //   // axios
  //   //   .get('https://newsapi.org/v2/top-headlines', {
  //   //     params: {
  //   //       country: 'us',
  //   //       category: 'health',
  //   //       apiKey: 'c4dc33607f7c44e1bc11189450c91b43',
  //   //     },
  //   //   })
  //   //   .then((response) => {
  //   //     setMedicalArticles(response.data.articles);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error('Error fetching medical articles:', error);
  //   //   });
  // }, []);

  // const renderImageCarouselItems = () => {
  //   return medicalImages.map((image) => (
  //     <div key={image.id} className="carousel-item">
  //       <img src={image.urls.regular} alt={image.alt_description} className="w-full h-auto" />
  //     </div>
  //   ));
  // };

  // const renderArticleList = () => {
  //   return medicalArticles.map((article, index) => (
  //     <div key={index} className="mb-6">
  //       <h3 className="text-xl font-bold mb-2">{article.title}</h3>
  //       <p>{article.description}</p>
  //     </div>
  //   ));
  // };

  // const carouselSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <LoggedInHeader>
      {/* <div className="logged-home flex items-center h-full flex-col">
        <div className="carousel-container w-full mb-8">
          <Slider {...carouselSettings} className="medical-images-carousel">
            {renderImageCarouselItems()}
          </Slider>
        </div>
        <div className="bg-white p-8 shadow-md rounded-md w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Medical Articles</h2>
          {renderArticleList()}
        </div>  
      </div> */}
      HELLO GUYS
    </LoggedInHeader>
  );
};

export default LoggedHome;
