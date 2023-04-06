import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Button,
  Container,
  Grid,
} from '@mui/material';
import Spinner from './Spinner.jsx';

const OpenAiForm = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (data) => {
    const { prompt, size, count } = data;
    console.log({ prompt, size, count });

    if (prompt === '') {
      alert('Please add more text');
      return;
    }

    generateImageRequest(prompt, size, count);
  };

  async function generateImageRequest(prompt, size, count) {
    try {
      setLoading(true);
      setImageURL([]);
      setErrorMessage('');

      const response = await fetch(
        'http://localhost:5555/openai/generateimage',
        {
          method: 'POST',
          headers: {
            'content-type': 'Application/json',
          },
          body: JSON.stringify({
            prompt,
            size,
            count,
          }),
        }
      );

      if (!response.ok) {
        setLoading(false);
        throw new Error('that image could not be generated');
      }

      setLoading(false);

      const data = await response.json();
      const url = data.data;

      setImageURL(url);

      console.log(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return loading ? (
    <Spinner />
  ) : (
    <>
      <main id="openAiForm">
        <Container>
          <Grid container spacing={2}>
            <Grid item md={8}>
              <Box className="showcase">
                <h4>Generate an Image</h4>
                <p className="subtitle">
                  Descibe an image to be generated by AI
                </p>
                <form id="image-form" onSubmit={handleSubmit(onSubmit)}>
                  <FormControl sx={{ my: 2 }} required className="formInput">
                    <TextField
                      className="input"
                      label="Enter text"
                      variant="outlined"
                      size="small"
                      {...register('prompt')}
                    />
                  </FormControl>

                  <Button
                    color="secondary"
                    variant="contained"
                    size="small"
                    type="submit"
                    className="submitButton"
                  >
                    Generate{' '}
                  </Button>
                </form>
              </Box>
            </Grid>

            <Grid item md={4} xs={12}>
              <section className="image">
                <div className="image-container">
                  <h4 className="msg">{errorMessage}</h4>
                  <div className="imageGrid">
                    {imageURL.length > 0
                      ? imageURL.map((img) => {
                          return (
                            <img
                              src={img.url}
                              alt=""
                              id="image"
                              className="generatedImg"
                            />
                          );
                        })
                      : null}
                  </div>
                </div>
              </section>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};
export default OpenAiForm;
