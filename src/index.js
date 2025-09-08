import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-mau13m16sibzmgxq.us.auth0.com"
    clientId="Yf3nr3OTVTLvWHJg6Jlfy7SS5ynDXmDc"
    authorizationParams={{
      redirect_uri: "http://localhost:3000"
    }}
  >
    <App />
  </Auth0Provider>
);