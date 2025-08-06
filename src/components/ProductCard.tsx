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
  const product = props.product;
  return (
    <>
      <div>
        <img src={cow} alt='cow image'></img>
        <p>
          {product.animal_name}: {product.animal_gender} {product.animal_type}
          <br/>
          Age: {product.age} years old | Weight: {product.weight} lbs
          <br/>
          Price: ${product.price}
        </p>
      </div>
    </>

  )
}

export default ProductCard