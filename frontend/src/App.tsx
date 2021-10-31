import React from 'react';
import ArticlesList from './articles/pages/ArticlesList'
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import theme from './common/theme/Theme';
import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material/styles";
import { StylesProvider } from '@material-ui/core/styles';

interface props { };
const App: React.FC<props> = () => {



  return (
    <StylesProvider injectFirst>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
              <ArticlesList />
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </StyledEngineProvider>
    </StylesProvider>
  );
}

export default App;
