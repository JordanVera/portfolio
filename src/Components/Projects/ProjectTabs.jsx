import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PgaAlphaTab from './PgaAlpha/PgaAlphaTab';
import NflLastLongerTab from './NflLastLonger/NflLastLongerTab';
import MassEmailerTab from './MassEmailer/MassEmailerTab';
import GifGeneratorTab from './GifGenerator/GifGeneratorTab';
import TriviaGameTab from './TriviaGame/TriviaGameTab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ProjectTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 'auto',
        minWidth: 'auto',
        maxWidth: '800px',
        mx: 'auto',
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        textColor="secondary"
        indicatorColor="secondary"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          color: '#ff005a',
        }}
      >
        <Tab label="PGA Alpha" {...a11yProps(0)} />
        <Tab label="NFL Last Longer" {...a11yProps(1)} />
        <Tab label="Mass Emailer" {...a11yProps(2)} />
        <Tab label="Gif Generator" {...a11yProps(3)} />
        <Tab label="Trivia Game" {...a11yProps(4)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <PgaAlphaTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NflLastLongerTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MassEmailerTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GifGeneratorTab />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TriviaGameTab />
      </TabPanel>
    </Box>
  );
}
