import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router,Route, BrowserRouter, RouterProvider, } from 'react-router-dom'
import Layout from './Layout/Layout'
import {Home, About,Contact,Github} from './Navbar/Navitems/index'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        index:'Home',
        element:<Home/>
      },
      {
        path:'About',
        element:<About/>
      },
      {
        path:'Github',
        element:<Github/>
      },
      {
        path:'Contact',
        element:<Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
      {/* <App/> */}
  </React.StrictMode>
)
