import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Category } from './pages/Category/Category'
import { Product } from './pages/Product/Product'

function App() {

  const Layout = () => {

    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
    
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/products/:id' element={<Category/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
