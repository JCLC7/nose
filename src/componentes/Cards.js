import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      
      <h1>Productos</h1>
      
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
              src='images/img0.jpg'
              text='Reducen los efectos de la inflamación'
              label='Antinflamatorios'
              path='/services'
            />
            <CardItem
              src='images/img0.jpg'
              text='Reducen los efectos de la inflamación'
              label='Antinflamatorios'
              path='/services'
            />
            <CardItem
              src='images/img0.jpg'
              text='Reducen la tos no productiva'
              label='Antitusivos'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img0.jpg'
              text='Reducen los efectos de la inflamación'
              label='Antinflamatorios'
              path='/services'
            />
            <CardItem
              src='images/img0.jpg'
              text='Reducen los efectos de la inflamación'
              label='Antinflamatorios'
              path='/services'
            />
            <CardItem
              src='images/img0.jpg'
              text='Reducen la tos no productiva'
              label='Antitusivos'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img0.jpg'
              text='Alivian el dolor físico'
              label='Analgésicos'
              path='/services'
            />
            <CardItem
              src='images/img0.jpg'
              text='Combaten los efectos negativos de las reacciones alérgicas'
              label='Antialérgicos'
              path='/products'
            />
            <CardItem
              src='images/img0.jpg'
              text='Hacen frente a infecciones'
              label='Antinfecciosos'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      
    </div>
    
  );
}

export default Cards;
