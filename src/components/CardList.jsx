import React from 'react';
import Card from './Card'; // Update the path based on your project structure
import data from '../data';

export default function CardList() {
  const cards = data.map(item => (
    <Card
      key={item.id}
      img={item.imageUrl} 
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
    />
  ));

  return (
    <div>
      <section className='cards-lists'>{cards}</section>
    </div>
  );
}
