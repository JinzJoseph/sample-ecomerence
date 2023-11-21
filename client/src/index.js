import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme'
import { Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "./state"


const store=configureStore({
  reducer:{cart :cartReducer}
})
 //THEMEPROVIDER=The ThemeProvider component is used to wrap your application and provide a theme to all the components
// within that tree. It accepts a theme prop, which should be an instance of a MUI theme created using the createTheme function

//CSSBASELINE=The CssBaseline component is used to apply a baseline styling to your application. It includes styles that normalize 
//the default styling across different browsers, providing a consistent base for your components. It's typically used at the top level of your application, right after the ThemeProvider:

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

  
    <ThemeProvider theme={theme}>
<CssBaseline/>
    <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);


