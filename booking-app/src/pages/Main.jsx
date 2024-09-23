
import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Box, Button, TextField, MenuItem, Grid ,Typography} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [destinations, setDestinations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    axios.get('http://localhost:3001/destination').then(response => {
      setDestinations(response.data);
    });
  }, []);

  const onSubmit = async (values) => {
    try {
      
      navigate('/hotels', { state: { destination: values.destination } });
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.destination) {
      errors.destination = 'Destination is required';
    }
    return errors;
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', marginBottom: '2rem' }}>
        Search Hotels
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
           
              <Grid item xs={12} sm={6}>
                <Field name="destination">
                  {({ input, meta }) => (
                    <>
                      <label htmlFor="destination">Destination</label>
                      <TextField
                        {...input}
                        id="destination"
                        select
                        label="Select destination"
                        fullWidth
                        error={meta.touched && meta.error}
                        helperText={meta.touched && meta.error}
                      >
                        {destinations.map(option => (
                          <MenuItem key={option.id} value={option.label}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </>
                  )}
                </Field>
              </Grid>

             
              <Grid item xs={12} sm={6}>
                <Field name="checkInDate">
                  {({ input, meta }) => (
                    <>
                      <label htmlFor="checkInDate">Check-in Date</label>
                      <TextField
                        {...input}
                        type="date"
                        id="checkInDate"
                        fullWidth
                      />
                    </>
                  )}
                </Field>
              </Grid>

             
              <Grid item xs={12} sm={6}>
                <Field name="checkOutDate">
                  {({ input, meta }) => (
                    <>
                      <label htmlFor="checkOutDate">Check-out Date</label>
                      <TextField
                        {...input}
                        type="date"
                        id="checkOutDate"
                        fullWidth
                      />
                    </>
                  )}
                </Field>
              </Grid>

              
              <Grid item xs={12} sm={6}>
                <Field name="guests">
                  {({ input, meta }) => (
                    <>
                      <label htmlFor="guests">Guests</label>
                      <TextField
                        {...input}
                        id="guests"
                        label="Number of guests"
                        type="number"
                        fullWidth
                      />
                    </>
                  )}
                </Field>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={submitting || pristine}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </Box>
  );
};

export default Main;
