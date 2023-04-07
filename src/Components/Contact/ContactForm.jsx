import React from 'react';
import {
  TextField,
  FormControl,
  Box,
  Button,
  Container,
  Grid,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  let url = '';
  const apiUrl = process.env.REACT_APP_API_URL;

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  const toastSettingsObj = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  };

  if (apiUrl) {
    url = apiUrl;
  } else {
    url = '';
  }

  const validateForm = (data) => {
    let { firstName, lastName, email, msg } = data;
    let formIsValid = true;
    if (firstName === '' || firstName.length <= 3) {
      toast.error('First name must be at least 3 characters', toastSettingsObj);
      formIsValid = false;
    }
    if (lastName === '' || lastName.length <= 3) {
      toast.error('Last name must be at least 3 characters', toastSettingsObj);
      formIsValid = false;
    }
    if (validateEmail(email) === false) {
      toast.error('Please enter a valid email address', toastSettingsObj);
      formIsValid = false;
    }
    if (msg.length <= 10) {
      toast.error(
        'Message must be at least 10 characters long',
        toastSettingsObj
      );
      formIsValid = false;
    }

    return formIsValid;
  };

  const onSubmit = (data) => {
    if (validateForm(data)) {
      fetch(`${url}/submitForm`, {
        method: 'POST',
        headers: {
          'content-type': 'Application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.success) {
            console.log('RESULT', response);
            toast.success(
              'Your message has been sent. I will get back to you asap.',
              toastSettingsObj
            );
            const form = document.getElementById('contactForm');
            form.reset();
          }
        })
        .catch((err) => {
          console.log('err>>', err);
        });
    }
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          style={{
            marginBottom: '0 !important',
            paddingBottom: '10px !important',
          }}
        >
          <label> First name </label>{' '}
          <FormControl sx={{ my: 2 }} required className="formInput">
            <TextField
              className="input"
              variant="outlined"
              size="small"
              {...register('firstName', {
                required: true,
                maxLength: 80,
              })}
            />
          </FormControl>
        </Grid>{' '}
        <Grid
          item
          xs={6}
          style={{
            marginBottom: '0 !important',
            paddingBottom: '10px !important',
          }}
        >
          <label> Last name </label>
          <FormControl sx={{ my: 2 }} required className="formInput">
            <TextField
              className="input"
              variant="outlined"
              size="small"
              {...register('lastName', {
                required: true,
                maxLength: 100,
              })}
            />
          </FormControl>
        </Grid>{' '}
      </Grid>{' '}
      <label> Email </label>{' '}
      <FormControl sx={{ my: 2 }} required className="formInput">
        <TextField
          className="input"
          variant="outlined"
          size="small"
          {...register('email', {
            required: true,
            maxLength: 100,
          })}
        />
      </FormControl>
      <label> Message </label>{' '}
      <TextField
        className="formInput"
        id="outlined-multiline-static"
        multiline
        rows={4}
        defaultValue="Default Value"
        {...register('msg', {
          required: true,
        })}
      />
      <Button
        className="submitButton"
        variant="contained"
        type="submit"
        color="secondary"
      >
        Submit{' '}
      </Button>{' '}
    </form>
  );
}
