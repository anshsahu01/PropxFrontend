import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import store from './Store/store.js'
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import SignInpage from './pages/SignInpage.jsx'


const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:<SignInpage/>
          
        }
      ]

    }
  ]
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
