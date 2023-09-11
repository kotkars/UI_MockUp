import React from 'react';
import { Typography, Grid } from '@mui/material';
import ProductCard from './ProductCard';

const ProductSuggestion = ({ suggestedProducts }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        You May Also Like
      </Typography>
      <Grid container spacing={2}>
        {suggestedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductSuggestion;
