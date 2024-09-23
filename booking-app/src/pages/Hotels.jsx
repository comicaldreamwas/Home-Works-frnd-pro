
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Card, CardContent, Typography, Grid, Button, } from '@mui/material';
import axios from 'axios';

const Hotels = () => {
  const location = useLocation();
  const [hotels, setHotels] = useState([]);
  const selectedDestination = location.state?.destination || null; 

  useEffect(() => {
   
    axios.get('http://localhost:3001/hotels').then(response => {
      if (selectedDestination) {
        
        const filteredHotels = response.data.filter(hotel => hotel.city === selectedDestination);
        setHotels(filteredHotels);
      } else {
        
        setHotels(response.data);
      }
    });
  }, [selectedDestination]);

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', marginBottom: '2rem' }}>
        {selectedDestination
          ? `Available Hotels in ${selectedDestination}`
          : 'All Available Hotels'}
      </Typography>
      <Grid container spacing={3}>
        {hotels.length > 0 ? (
          hotels.map(hotel => (
            <Grid item xs={12} sm={6} md={4} key={hotel.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{hotel.name}</Typography>
                  <Typography>City: {hotel.city}</Typography>
                  <Typography>Rating: {hotel.hotel_rating}</Typography>
                  <Button variant="contained" fullWidth>
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No hotels found for {selectedDestination}</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Hotels;
