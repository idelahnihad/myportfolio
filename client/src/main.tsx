import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// HashRouter is used instead of BrowserRouter so deep links and page
// refreshes keep working on static hosts like GitHub Pages and Netlify.
import { HashRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
