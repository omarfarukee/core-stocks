import logo from './logo.svg';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
      {
        path: '/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            
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
