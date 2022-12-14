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
import SoldProduct from './Pages/Sold/SoldProduct';
import AddSoldProducts from './Pages/AddSoldProducts/AddSoldProducts';
import LendProducts from './Pages/Lend/LendProducts';
import AddLendProducts from './Pages/AddLendProdcts/AddLendProducts';
import ReturnBackProducts from './Pages/ReturnBack/ReturnBackProducts';
import AddReturnBackProducts from './Pages/AddReturnBackProduc/AddReturnBackProducts';
import AllStocksDetails from './Pages/AllStocksDetails/AllStocksDetails';
import Partners from './Partners/Partners';
import AccountOdCompany from './Partners/AccountsOfCompany/AccountOdCompany';
import CalculateShares from './Partners/CalculeteShares/CalculateShares';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

function App() {
  const router = createBrowserRouter([
      {
        path: '/',
        errorElement:<ErrorPage></ErrorPage>,
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
            path:'/addSoldProduct',
            element:<PrivateRoute><AddSoldProducts></AddSoldProducts></PrivateRoute>
          },
          {
            path:'/addLendProduct',
            element:<PrivateRoute><AddLendProducts></AddLendProducts></PrivateRoute>
          },
          {
            path:'/addReturnBackProduct',
            element:<PrivateRoute><AddReturnBackProducts></AddReturnBackProducts></PrivateRoute>
          },
          {
            path:'/allStocksDetails',
            element:<PrivateRoute><AllStocksDetails></AllStocksDetails></PrivateRoute>
          },
          {
            path:'/profitAccount',
            element:<PrivateRoute><Partners></Partners></PrivateRoute>
          },
          {
            path:'/companyAccount',
            element:<PrivateRoute><AccountOdCompany></AccountOdCompany></PrivateRoute>
          },
          {
            path:'/stocksProduct/:id',
            element:<PrivateRoute><StocksProduct></StocksProduct></PrivateRoute>,
            loader:async ({params}) =>{
            return fetch(`https://starting-core-server.vercel.app/stocksProduct/${params.id}`)
            }
          },
          {
            path:'/borrowed/:id',
            element:<PrivateRoute><AddedBorrowedStokes></AddedBorrowedStokes></PrivateRoute>,
            loader:async ({params}) =>{
            return fetch(`https://starting-core-server.vercel.app/borrowed/${params.id}`)
            }
          },
          {
            path:'/return/:id',
            element:<PrivateRoute><ReturnProduct></ReturnProduct></PrivateRoute>,
            loader:async ({params}) =>{
            return fetch(`https://starting-core-server.vercel.app/return/${params.id}`)
            }
          },
          {
            path:'/sold/:id',
            element:<PrivateRoute><SoldProduct></SoldProduct></PrivateRoute>,
            loader:async ({params}) =>{
            return fetch(`https://starting-core-server.vercel.app/sold/${params.id}`)
            }
          },
          {
            path:'/lend/:id',
            element:<PrivateRoute><LendProducts></LendProducts></PrivateRoute>,
            loader:async ({params}) =>{
            return fetch(`https://starting-core-server.vercel.app/lend/${params.id}`)
            }
          },
          {
            path:'/returnBack/:id',
            element:<PrivateRoute><ReturnBackProducts></ReturnBackProducts></PrivateRoute>,
            loader:async ({params}) =>{
            return fetch(`https://starting-core-server.vercel.app/returnBack/${params.id}`)
            }
          },
          {
            path:'/profitAccount/:id',
            element:<PrivateRoute><CalculateShares></CalculateShares></PrivateRoute>,
            loader:async ({params}) =>{
            return fetch(`https://starting-core-server.vercel.app/profitAccount/${params.id}`)
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
