import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query'
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
