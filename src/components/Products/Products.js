import React from 'react';

import classes from './Products.module.css';

const Products = (props) => {
  return (
    <div className={classes.product}>
        <img src={props.image} alt="image.png" />
        <h3>{props.title}</h3>
        <p><span>Rating: </span>{props.rating}</p>
        <p><span>Price: </span>${props.price}</p>
    </div>
  )
}

export default Products;