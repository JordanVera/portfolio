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
            className="gridItem"
            item
            sx={{
              bgcolor: 'background.paper',
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
                  <p
                    style={{
                      fontSize: '14px',
                      marginBottom: 0,
                      marginLeft: 8,
                    }}
                  >
                    Verawebdev@protonmail.com
                  </p>
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
                  <p
                    style={{
                      fontSize: '14px',
                      marginBottom: 0,
                      marginLeft: 8,
                    }}
                  >
                    github.com/JordanVera
                  </p>
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
                  <p
                    style={{
                      fontSize: '11px',
                      marginBottom: 0,
                      marginLeft: 8,
                    }}
                  >
                    linkedin.com/in/jordan-vera-836701161/{' '}
                  </p>
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
