import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import BaseLayout from '../layouts/BaseLayout/BaseLayout';
import Homepage from '../feature/Homepage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          {
            path: '',
            element: <Homepage />,
          },
          
    ],
  }
    ],
  }
]);

export default router;
