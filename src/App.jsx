import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Applayout from "./components/Applayout/Applayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Country from "./pages/Country"
import Contact from "./pages/Conact"
import ErrorPage from "./pages/ErrorPage"
import Countrydetail from './components/Applayout/Countrydetail'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Applayout />,
    errorElement:<ErrorPage />,
    children:[
      {
     path:"/",
     element:<Home />
  },
  {
     path:"/about",
     element:<About/>
  },
  {
     path:"/country",
     element:<Country/>
  },
  {
     path:"/country/:name",
     element:<Countrydetail />

  },
  {
     path:"/contact",
     element:<Contact/> 
  },
    ]
  },
  
])

function App() {
  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
