import React from 'react';
import ProductList from './userPages/ProductList';
import ReviewList from './userPages/ReviewList';
import Toolbar from './userPages/toolbar';
import ProductSuggestion from './userPages/ProductSuggestion';
import watch1 from './images/rollex.jpeg';
import menwatch from './images/watches.jpg';
import womens from './images/watches1.jpg';
const products = [
  // Mock product data
  // Add more products as needed
 
  {
    id: 1,
    name: 'Product 1',
    description: 'Product 1 description',
    price: 19.99,
    image: watch1
  },
  {
    id: 1,
    name: 'Product 1',
    description: 'Product 1 description',
    price: 19.99,
    image: menwatch
  },
  {
    id: 1,
    name: 'Product 1',
    description: 'Product 1 description',
    price: 19.99,
    image: womens,
  },
  // ...
];
<img src={watch1} alt="watch1" />
const reviews = [
  // Mock review data
  // Add more reviews as needed
  {
    title: 'Great product!',
    content: 'I love this product. It works perfectly!',
  },
  // ...
];

const suggestedProducts = [
  // Mock suggested product data
  // Add more suggested products as needed
  {
    id: 101,
    name: 'Suggested Product 1',
    description: 'Suggested Product 1 description',
    price: 29.99,
    image: '',
  },
  // ...
];

function App() {
  return (
    <div>
      <Toolbar/>
      <ProductList products={products} />     
      <ReviewList reviews={reviews} />
      <ProductSuggestion suggestedProducts={suggestedProducts} />
    </div>
  );
}

export default App;
