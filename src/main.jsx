// import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'

// import App from './App.jsx'
// import Tiger from './pages/Tiger.jsx'
// import Coelho from './pages/Coelho.jsx'
// import Touro from './pages/Touro.jsx'
// import Rato from './pages/Rato.jsx'
// import Crash from './pages/Crash.jsx'
// import Aviator from './pages/Aviaton.jsx'
// import Bacbo from './pages/bacbo.jsx'
// import Mines from './pages/MInes/Mines.jsx'
// import FortuneDragon from './pages/fortuneDragon.jsx'
// import Spaceman from './pages/Spaceman.jsx'
// import Footbalstudio from './pages/Footbalstudio.jsx'
// import Roleta from './pages/Roleta.jsx'
// import Penalty from './pages/Penalty.jsx'
// import Vip from './Vip.jsx'
// import Login from './pages/Login.jsx'

// function loginAction({ resquest }) {
//   console.log(resquest);
//   return null

// }


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/login',
//     element: <Login />,
//     action: { loginAction }
//   },
//   {
//     path: '/vip',
//     element: <Vip />
//   },
//   {
//     path: '/mines',
//     element: <Mines />
//   },
//   {
//     path: '/autoroleta',
//     element: <Roleta />
//   },
//   {
//     path: '/penalty',
//     element: <Penalty />
//   },
//   {
//     path: '/Spaceman',
//     element: <Spaceman />
//   },
//   {
//     path: '/Footballstudio',
//     element: <Footbalstudio />
//   },
//   {
//     path: '/tiger',
//     element: <Tiger />
//   },
//   {
//     path: '/coelho',
//     element: <Coelho />
//   },
//   {
//     path: '/touro',
//     element: <Touro />
//   },
//   {
//     path: '/rato',
//     element: <Rato />
//   },
//   {
//     path: '/crash',
//     element: <Crash />
//   },
//   {
//     path: '/aviator',
//     element: <Aviator />
//   },
//   {
//     path: '/bacbo',
//     element: <Bacbo />
//   },
//   {
//     path: '/fortunedragon',
//     element: <FortuneDragon />
//   },

// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<App />}></Route>
//         <Route path='/login' element={<Login />}></Route>
//         {/* <RouterProvider router={router} /> */}

//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
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
import Roleta from './pages/Roleta.jsx'
import Penalty from './pages/Penalty.jsx'
import Vip from './Vip.jsx'
import Login from './pages/Login.jsx'



const loginLoader = async () => {
  if (!fakeAuthProvider.isAuthenticate) {
    return null
  }
  return redirect('/vip')
}

const fakeAuthProvider = {
  isAuthenticate: false,
  email: null,
  signIn: async function (email) {
    await new Promise(resolve => setTimeout(resolve, 500))
    this.isAuthenticate = true,
      this.email = email
  },
  signOut: async function () {
    await new Promise(resolve => setTimeout(resolve, 500))
    this.isAuthenticate = false,
      this.email = null
  },
}

async function loginAction({ request }) {
  const { email } = Object.fromEntries(await request.formData())
  try {
    await fakeAuthProvider.signIn(email)
  } catch (error) {
    return { error: 'Login incorreto' }
  }

  return redirect('/vip');
}

const appLoader = () => {
  if(!fakeAuthProvider.isAuthenticate){
    return redirect('/')
  }
  return null
}

// Criando o roteador com createBrowserRouter
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login />, action: loginAction, loader: loginLoader },
  { path: '/tiger', element: <Tiger /> },
  { path: '/coelho', element: <Coelho /> },
  { path: '/touro', element: <Touro /> },
  { path: '/rato', element: <Rato /> },
  { path: '/crash', element: <Crash /> },
  { path: '/aviator', element: <Aviator /> },
  { path: '/bacbo', element: <Bacbo /> },
  { path: '/mines', element: <Mines /> },
  { path: '/fortunedragon', element: <FortuneDragon /> },
  { path: '/spaceman', element: <Spaceman /> },
  { path: '/footbalstudio', element: <Footbalstudio /> },
  { path: '/roleta', element: <Roleta /> },
  { path: '/penalty', element: <Penalty /> },
  { path: '/vip', element: <Vip />, loader: appLoader },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
