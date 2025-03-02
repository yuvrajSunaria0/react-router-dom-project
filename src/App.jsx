
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './parts/home'
import Contact from './parts/contact'
import Footer from './parts/Footer'
import About  from './parts/About'
import Navbar from './parts/navbar'
const router = createBrowserRouter([
  {path:"/",
    element:<div><Navbar/><Home/><Footer/></div>
  }
  ,{path:"/contact",
    element:<div><Navbar/><Contact/><Footer/></div>
  },
  {path:"/about",
    element:<div><Navbar/><About/><Footer/></div>
  }
])
function App() {


  return (
    <>
    {/* <Navbar/> */}
   {/* <Navbar2/> */}
   
   <RouterProvider router={router}/>
   
     </>
  )
}

export default App
