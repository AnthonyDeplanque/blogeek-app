import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import theme from './common/theme/Theme';
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { StylesProvider } from '@material-ui/core/styles';
import Layout from './layouts/pages/Layout';
import AppRoutes from './AppRoutes';

interface props { };
const App: React.FC<props> = () => {



  return (
    <StylesProvider injectFirst>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <Layout>
                <AppRoutes />
              </Layout>
            </Router>
          </ThemeProvider>
        </Provider>
      </StyledEngineProvider>
    </StylesProvider>
  );
}

export default App;
