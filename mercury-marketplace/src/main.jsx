import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import AppRouter from './AppRouter.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
          <AppRouter />
        {/*<App />*/}
      </Router>
  </StrictMode>,
)
