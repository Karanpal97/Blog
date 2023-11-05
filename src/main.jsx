import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from "./App/Store.js"
import {Login, Protected, SignUp} from "./components/index.js"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Addpost from "./components/pages/AddPost.jsx"
import AllPost from "./components/pages/AllPost.jsx"
import EditPost from "./components/pages/EditPost.jsx"
import Home from "./components/pages/Home.jsx"

const router=createBrowserRouter([
  {path:'/',
   element:<App/>,
   children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/login',
      element:(<Protected authentication={false}>
        <Login/>
      </Protected>)
    },
    {
      path:'/SignUp',
      element:(<Protected authentication={false}>
        <SignUp/>
      </Protected>)
    },
    {
      path:'/allPost',
      element:(<Protected authentication>
        <AllPost/>
      </Protected>)
    },
    {
      path:'/addPost',
      element:(<Protected authentication>
        <Addpost/>
      </Protected>)
    },
    {
      path:'/editPost',
      element:(<Protected authentication>
        <EditPost/>
      </Protected>)
    }
   ]

},
  
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
