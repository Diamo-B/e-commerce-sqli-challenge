import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/auth/Register';
import Login1 from './components/auth/Login1';
import { Provider } from 'react-redux';
import { store } from './stores/gen.store';
import GenLayout from './components/Layout/genLayout';

const router = createBrowserRouter([
{
  path: "/login",
  element: <GenLayout><Login1/></GenLayout>,
  
},
{
  path:"/register",
  element: <Register/>
}
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
