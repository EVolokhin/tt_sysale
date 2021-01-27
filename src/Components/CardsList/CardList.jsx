import React from 'react';
import { Card } from '../Card/Card';
import './cardList.scss';

const products = [
  {
    id: 1,
    picture: './images/image23.svg',

  },
  {
    id: 2,
    picture: './images/group 618.svg',

  },
  {
    id: 3,
    picture: './images/image25.svg',

  },
];

export const CardsList = () => (
  <div className="container">
    {products.map(product => (
      <Card
        id={product.id}
        picture={product.picture}
        key={product.id}
      />
    ))}
  </div>
);
