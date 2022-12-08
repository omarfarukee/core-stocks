import logo from './logo.svg';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import CreateUser from './Pages/CreateUser/CreateUser';
import StocksProduct from './StocksProduct/StocksProduct';
import PrivateRoute from './Private/PrivateRoute';
import AddProducts from './Pages/AddProducts/AddProducts';
import BorrowedStokes from './Pages/borrowedStokes/BorrowedStokes';
import AddedBorrowedStokes from './Pages/AddedBorrowedStokes/AddedBorrowedStokes';
import AddReturnStokes from './Pages/AddRrturnStokes/AddReturnStokes';
import ReturnProduct from './Pages/Return/ReturnProduct';

function App() {
  const router = createBrowserRouter([
      {
        path: '/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/home',
            element:<Home></Home>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/signUp',
            element:<CreateUser></CreateUser>
          },
          {
            path:'/addProducts',
            element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>
          },
          {
            path:'/borrowedStokes',
            element:<PrivateRoute><BorrowedStokes></BorrowedStokes></PrivateRoute>
          },
          {
            path:'/returnStokes',
            element:<PrivateRoute><AddReturnStokes></AddReturnStokes></PrivateRoute>
          },
          {
            path:'/stocksProduct/:id',
            element:<PrivateRoute><StocksProduct></StocksProduct></PrivateRoute>,
            loader:async ({params}) =>{
            return fetch(`http://localhost:5000/stocksProduct/${params.id}`)
            }
          },
          {
            path:'/borrowed/:id',
            element:<PrivateRoute><AddedBorrowedStokes></AddedBorrowedStokes></PrivateRoute>,
            loader:async ({params}) =>{
            return fetch(`http://localhost:5000/borrowed/${params.id}`)
            }
          },
          {
            path:'/return/:id',
            element:<PrivateRoute><ReturnProduct></ReturnProduct></PrivateRoute>,
            loader:async ({params}) =>{
            return fetch(`http://localhost:5000/return/${params.id}`)
            }
          }
        ]
      }
  ])
  return (
    <div>
    <RouterProvider router={router}>

    </RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
