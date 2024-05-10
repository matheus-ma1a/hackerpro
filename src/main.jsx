import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Inteligencia from './pages/inteligencia.jsx' 
import Tiger from './pages/Tiger.jsx'
import Coelho from './pages/Coelho.jsx'
import Touro from './pages/Touro.jsx'
import Rato from './pages/Rato.jsx'
import Crash from './pages/Crash.jsx'
import Aviator from './pages/Aviaton.jsx'
import Bacbo from './pages/bacbo.jsx'
import Mines from './pages/MInes/Mines.jsx'
import FortuneDragon from './pages/fortuneDragon.jsx'
import Spaceman from './pages/Spaceman.jsx'
import Footbalstudio from './pages/Footbalstudio.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/inteligencia',
    element: <Inteligencia />
  },
  {
    path: '/mines',
    element: <Mines />
  },
  {
    path: '/Spaceman',
    element: <Spaceman/>
  },
  {
    path: '/Footballstudio',
    element: <Footbalstudio/>
  },
  {
    path: '/tiger',
    element: <Tiger />
  },
  {
    path: '/coelho',
    element: <Coelho />
  },
  {
    path: '/touro',
    element: <Touro />
  },
  {
    path: '/rato',
    element: <Rato />
  },
  {
    path: '/crash',
    element: <Crash />
  },
  {
    path: '/aviator',
    element: <Aviator />
  },
  {
    path: '/bacbo',
    element: <Bacbo />
  },
  {
    path: '/fortunedragon',
    element: <FortuneDragon />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
