import React from 'react';
import PropTypes from 'prop-types';
import { CardControl } from '../CardControl/CardControl';
import { CardInfo } from '../CardInfo/CardInfo';

import './card.scss';

export const Card = ({ id, picture }) => (
  <div className="card">
    <p className="card__logo">new</p>
    <button className="card__compare" type="button">
      <img
        className="card__compare-image"
        alt="compare"
        src="./images/v3.svg"
      />
    </button>
    <div>
      <img
        className="card__image"
        alt="product"
        src={picture}
      />
    </div>
    <CardInfo />

    <CardControl id={id} />
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
};
