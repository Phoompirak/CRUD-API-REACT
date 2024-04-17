import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import EditForm from './component/EditForm/EditForm';
import ErrorPage from './component/ErrorPage';
import Favorite from './component/Favorite/Favorite';
import AboutMe from './component/AboutMe/AboutMe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/edit/:id',
    element: <EditForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/favorite',
    element: <Favorite />,
    errorElement: <ErrorPage />
  },
  {
    path: '/aboutme',
    element: <AboutMe />,
    errorElement: <ErrorPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
