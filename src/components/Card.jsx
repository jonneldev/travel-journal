// Updated Card component
import React from 'react';

export default function Card({
  img,
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description
}) {
  return (
    <div>
      <div className='card'>
        <img src={img} className='card--image' alt={title} />
        <div className='card--details'>
          <div className='card--location'>
            <img src="/images/location-icon.png" className='location--icon' alt="location icon" />
            <span className='location--text'>{location}</span>
            <a className='map--location' href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </div>
          <div className='card--details'>
            <span className='card--title'>{title}</span>
            <span className='travel--date'>{startDate} - {endDate}</span>
            <p className='travel--description'>{description}</p>
          </div>
        </div>
        
      </div>
      <hr />
    </div>
  
  );
}
