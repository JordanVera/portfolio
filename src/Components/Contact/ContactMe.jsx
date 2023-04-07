import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import Divider from '@mui/material/Divider';
import MailIcon from '@mui/icons-material/Mail';
import ContactForm from './ContactForm.jsx';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ContactMe() {
  return (
    <div id="contactMe">
      <Container>
        <Grid container>
          <Grid
            className="gridItem bgGrey"
            item
            sx={{
              py: 2,
              px: 2,
              height: 'auto',
              minWidth: 'auto',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            <Typography variant="h4">Contact Me</Typography>
            <Divider sx={{ my: 1 }} />
            <Grid container spacing={2}>
              <Grid item sm={4}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <MailIcon className="green" />
                  <a
                    className="smallLink"
                    style={{
                      marginLeft: 8,
                    }}
                    href="mailto:verawebdev@protonmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verawebdev@protonmail.com
                  </a>
                  <p></p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    margin: '12px 0 12px 0',
                  }}
                >
                  <GitHubIcon className="green" />
                  <a
                    className="smallLink"
                    style={{
                      marginLeft: 8,
                    }}
                    href="https://github.com/JordanVera"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/JordanVera{' '}
                  </a>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    margin: '12px 0 12px 0',
                  }}
                >
                  <LinkedInIcon className="green" />
                  <a
                    className="smallLink"
                    style={{
                      marginLeft: 8,
                    }}
                    href="https://linkedin.com/in/jordan-vera-836701161"
                    target="_blank"
                  >
                    linkedin.com/JordanVera{' '}
                  </a>
                </div>
              </Grid>
              <Grid item sm={8} sx={{ px: 2 }}>
                <ContactForm />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
