/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const CardControl = ({ id }) => {
  const [goodsId] = useState(id);
  const [count, setCount] = useState(1);
  const [color, setColor] = useState('Цвет');
  const [volume, setVolume] = useState('100');
  const [price, setPrice] = useState(200);
  const [totalPrice, setTotalPrice] = useState(price);
  const [dropActive, setDropActive] = useState(false);

  useEffect(() => {
    setTotalPrice(price * count);
  }, [price]);

  const handleCount = (event) => {
    if (event.target.id === 'increase') {
      setCount(count + 1);
      setTotalPrice((count + 1) * price);
    }

    if (event.target.id === 'decrease') {
      if (count === 1) {
        return;
      }

      setCount(count - 1);
      setTotalPrice((count - 1) * price);
    }
  };

  const handleColor = (event) => {
    setColor(event.target.innerText);
    setDropActive(false);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    switch (event.target.value) {
      case '200':
        setPrice('350');
        break;
      case '300':
        setPrice('500');
        break;

      default:
        setPrice('200');
        break;
    }
  };

  const handleDrop = () => {
    setDropActive(!dropActive);
  };

  const sendOrder = () => {
    const order = {
      goodsId,
      count,
      color,
      volume,
      price,
      totalPrice,
    };

    console.log(order);

    return order;
  };

  return (
    <div className="card__control">
      <div className="card__row">
        <div
          className="card__color"
          onClick={handleDrop}
          aria-hidden="true"
          onMouseLeave={() => {
            setDropActive(false);
          }}
        >
          <p>{color}</p>
          <img
            className="card__color-icon"
            src="./images/v1.svg"
            alt="choose color"
          />
          <div
            className={dropActive
              ? 'card__color-dropdown active'
              : 'card__color-dropdown'}
            onMouseLeave={() => {
              setDropActive(false);
            }}
          >
            <p
              onClick={handleColor}
              aria-hidden="true"
            >
              Желтый
            </p>
            <p
              onClick={handleColor}
              aria-hidden="true"
            >
              Красный
            </p>
            <p
              onClick={handleColor}
              aria-hidden="true"
            >
              Зеленый
            </p>
          </div>
        </div>
        <p className="card__price">{`${totalPrice} грн`}</p>
      </div>
      <div className="card__volumes">
        <div className="card__volume">

          <input
            type="radio"
            name={id}
            value="100"
            id={`${id}100`}
            defaultChecked
            onChange={handleVolumeChange}
          />
          <label htmlFor={`${id}100`}>100 мл</label>
        </div>
        <div className="card__volume">
          <input
            type="radio"
            name={id}
            value="200"
            id={`${id}200`}
            onChange={handleVolumeChange}
          />
          <label htmlFor={`${id}200`}>200 мл</label>
        </div>
        <div className="card__volume">
          <input
            type="radio"
            name={id}
            value="300"
            id={`${id}300`}
            onChange={handleVolumeChange}
          />
          <label htmlFor={`${id}300`}>300 мл</label>
        </div>
      </div>
      <div className="card__row">
        <div className="card__count">
          <button
            type="button"
            id="decrease"
            className="card__count-button"
            onClick={handleCount}
          >
            -
          </button>
          <span className="card__count-input">
            {count}
          </span>
          <button
            type="button"
            id="increase"
            className="card__count-button"
            onClick={handleCount}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="card__buy"
          onClick={sendOrder}
        >
          Купить
        </button>
      </div>
    </div>

  );
};

CardControl.propTypes = {
  id: PropTypes.number.isRequired,
};
