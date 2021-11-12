import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain="dev-45qyrjq6.us.auth0.com" //These are in your account
  clientId="pRjhN1OdQnQx15HNORpVpzYQH652giBd" //In account
  redirectUri={window.location.origin}
>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script src="https://apis.google.com/js/api.js" type="text/javascript"></script>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
