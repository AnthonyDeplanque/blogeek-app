import { Box } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(

  <React.StrictMode>
    <Box display="flex" width="100vw" height="100vh" margin="0" padding="0">
      <App />
    </Box>
  </React.StrictMode>
  , document.getElementById('root')
);

reportWebVitals();
