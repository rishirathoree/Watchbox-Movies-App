import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import AuthProviderContext from './Contexts/AuthProviderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderContext>
    <Provider store={store}>
    <App />
    </Provider>
    </AuthProviderContext>
  </React.StrictMode>,
)
