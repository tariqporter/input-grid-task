import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import registerServiceWorker from './registerServiceWorker';

export const store = createStore(rootReducer);

const breakpointValues = {
  xs: 0,
  sm: 360,  // overriden to meet spec
  md: 720,  // overriden to meet spec
  lg: 1280,
  xl: 1920,
};

const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
