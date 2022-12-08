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
            path:'/stocksProduct/:id',
            element:<PrivateRoute><StocksProduct></StocksProduct></PrivateRoute>,
            loader:async ({params}) =>{
            return fetch(`http://localhost:5000/stocksProduct/${params.id}`)
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
