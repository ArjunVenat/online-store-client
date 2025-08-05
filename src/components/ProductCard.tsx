import React, { useState } from 'react';
import type Product from '../interfaces/Product';
import cow from '../images/cow.jpg'

// export default interface Product {
//   id:            string;
//   timestamp:     Date;
//   animal_type:   string;
//   age:           number;
//   weight:        number;
//   price:         number;
//   animal_name:   string;
//   animal_gender: string;
// }

// Image
// ${{name}}: (M/F) ${{animal_type}}
// Age ${{age}} | Weight ${{age}}
// Price


function ProductCard(props: {product: Product}) {
  return (
    <>
      <div>
        <img src={cow} alt='cow image'></img>      
        <p>
          {props.product.animal_name}: {props.product.animal_gender} {props.product.animal_type}
          <br/>
          Age {props.product.age} | Weight {props.product.weight}
          <br/>
          {props.product.price}
        </p>
      </div>
    </>

  )
}

export default ProductCard