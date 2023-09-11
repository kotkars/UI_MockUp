import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Product Reviews
      </Typography>
      <List>
        {reviews.map((review, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText primary={review.title} secondary={review.content} />
            </ListItem>
            {index < reviews.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </div>
  );
};

export default ReviewList;
