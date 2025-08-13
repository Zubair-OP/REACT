import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/contact.jsx'
import Github from './components/Github.jsx'
import User from './components/User.jsx'
import { githubInfoLoader } from './components/githubInfoLoader'


const router = createBrowserRouter([
  {
  path: '/',
  element: <Layout />,
  children: [
    {
      path:'',
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>

    },
    {
      path:'contact',
      element:<Contact/>
    },
    {
      loader: githubInfoLoader,
      path: 'github',
      element: <Github />
    },
    {
      path:'User/:id',
      element:<User/>
    },
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
