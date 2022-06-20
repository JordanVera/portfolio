import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function ContactForm() {
  const { register, errors, handleSubmit } = useForm();
  const url = process.env.REACT_APP_API_URL;

  const onSubmit = (data) => {
    axios
      .post(`${url}/submitForm`, data)
      .then((res) => {
        console.log('RESULT', res);
      })
      .catch((err) => {
        console.log('err>>', err);
      });
  };
  console.log('FORM ERRORS', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ marginBottom: '0 !important' }}>
          <label>First name</label>
          <input
            type="text"
            {...register('firstName', { required: true, maxLength: 80 })}
          />
        </Grid>
        <Grid item xs={6} style={{ marginBottom: '0 !important' }}>
          <label>Last name</label>
          <input
            type="text"
            {...register('lastName', { required: true, maxLength: 100 })}
          />
        </Grid>
      </Grid>
      <label>Email</label>
      <input
        type="text"
        {...register('email', {
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      <label>Message</label>
      <textarea
        rows="4"
        style={{ width: '100%' }}
        {...register('msg', {
          required: true,
        })}
      ></textarea>
      <Button className="submitButton" variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}
