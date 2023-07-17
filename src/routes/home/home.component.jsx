
import React from 'react';
import { Outlet } from 'react-router-dom';
import Fantasy from '../HomePage/Fantasy-Book.jpeg'


import Directory from '../../components/directory/directory.component'


const BookList = () => {
 
    const categories = [
      {
        "id": 1,
        "title": "power",
         "imageUrl": Fantasy,
        
        
      },
      {
        "id": 2,
        "title": "Lost Soul",
        "imageUrl": "https://pixabay.com/get/g7dd411fcae90dbbb0545f502e754ec39138984cb2a9579b88a3d32ec62c9d75a512a57069e79215b287ab13365de00ef99be3a144d8b3e82931eceac5e26c481_1280.jpg"
      },
      {
        "id": 3,
        "title": "Two Little Girls",
        "imageUrl": "https://pixabay.com/get/gea166f600d35c86b9cf13b126a6a12898b9af55edaa53cd41285f374a19a097db38347a9e29bfc11e7bf82cf454690ff_640.jpg"
      },
      {
        "id": 4,
        "title": "The King",
        "imageUrl": "https://pixabay.com/get/g3f2e14e148dcbcec9efa616c0f5c793f65916cf5cbf51294974c3753696adc38b60a6e6fa3bcc16d7903acf5adef27cc577a5c079d7e8e5f6b88051b5d9fa6b7_1280.jpg",
      },
      {
        "id": 5,
        "title": "Cinderella",
        "imageUrl": "https://pixabay.com/get/ga496cac499eca86c9ad4926acac119ae243edb8dcaba18a741b41549051055f98621fbac97d4b156873eb287e751992e_640.jpg"
      }
    ];
    
return (
  <div>
  <Outlet />
  < Directory categories={categories} />
  </div>

    
        
);
};

export default BookList;



