import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="practice-tenant.au.auth0.com"
      clientId="JKv5m5C6LYyIaObQMvgJ8tn4fBnvHDFR"
      redirectUri={window.location.origin}
      audience="https://practice-tenant/"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)