import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import GitHubIcon from '@mui/icons-material/GitHub';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Clock from './Clock';
import Modal from './ContactForm/Modal';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (window.navigator.geolocation) {
  }

  return (
    <AppBar id="appBar" position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img
              className="appBarLogo"
              src="./media/logoWhite.svg"
              alt="logo"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key="2" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <a className="navLink" href="#projects">
                    Projects
                  </a>
                </Typography>
              </MenuItem>
              <MenuItem key="1" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <a className="navLink" href="#aboutMe">
                    About Me
                  </a>
                </Typography>
              </MenuItem>
              <MenuItem key="3" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <a className="navLink" href="#movieDice">
                    Movie Dice
                  </a>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MenuItem key="2" onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <a className="navLink" href="#projects">
                  Projects
                </a>
              </Typography>
            </MenuItem>
            <MenuItem key="1" onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <a className="navLink" href="#aboutMe">
                  About Me
                </a>
              </Typography>
            </MenuItem>
            <MenuItem key="3" onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <a className="navLink" href="#movieDice">
                  Movie Dice
                </a>
              </Typography>
            </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Clock />

            <IconButton size="small">
              <a
                className="socialMediaLink"
                href="https://github.com/JordanVera"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </IconButton>
            <IconButton size="small">
              <a
                className="socialMediaLink"
                href="https://www.linkedin.com/in/jordan-vera-836701161/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </IconButton>
            <IconButton size="small">
              <Modal />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
