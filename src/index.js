import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById('root'));

const envData = {
  APP_ID: "QTVKCqekzskve1mpuq6ojOmB82DaBbfzJ9J6Uoqn",
  SERVER_URL: "https://7sqjov2chgnu.usemoralis.com:2053/server"
}

root.render(
  <React.StrictMode>
    <MoralisProvider appId={envData.APP_ID} serverUrl={envData.SERVER_URL}>
      <App />
    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
