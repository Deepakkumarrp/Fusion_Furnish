import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-tuhvv2ft848hmod6.us.auth0.com"
    clientId="w7IV3j2PXG0S4RDC3SxRqKpQN5NNAwyw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
