import logo from './logo.svg';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import CreateUser from './Pages/CreateUser/CreateUser';

function App() {
  const router = createBrowserRouter([
      {
        path: '/',
        element:<Main></Main>,
        children:[
          {
            path:'/home',
            element:<Home></Home>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element:<CreateUser></CreateUser>
          },
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
