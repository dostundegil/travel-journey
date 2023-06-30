import '../index.css';
import React from 'react';
export default function Card(props) {
  return (
    <div className='card--body'>
        <img className='card--img' src={`./images/${props.imageUrl}`}/> 
        <div className='card--texts'>
            <div className='card--header'>
            <img className='card--img' src="./images/location.svg"/> 
            <p className='card--city'>{props.location}</p>
            <a href="#" className='card--header--link'>View on Google Maps</a>
            </div>
            <h1 className='card--title'>{props.title}</h1>
            <p className='card--date'>{props.startDate} - {props.endDate}</p>
            <p className='card--desc'>{props.description}</p>
        </div>
    </div>
  );
}

