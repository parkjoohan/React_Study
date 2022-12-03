import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke"
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
