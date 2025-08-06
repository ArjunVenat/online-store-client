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


function ProductCard(props: {product: Product, imageSource: string}) {
  const product = props.product;
  return (
    <>
      <div>
        <div>
          <img className="w-full h-full" src={props.imageSource? props.imageSource: cow} alt='cow image'></img>
        </div>
        <div>
          <p className="text-lg md:text-base sm:text-sm xs:text-xs ml-1">
            {product.animal_name}: {product.animal_gender} {product.animal_type}
            <br/>
            Age: {product.age} years old | Weight: {product.weight} lbs
            <br/>
            Price: ${product.price}
          </p>
        </div>
      </div>
    </>
  )
}

export default ProductCard