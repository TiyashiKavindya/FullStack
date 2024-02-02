import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
//Adding a router by configuring first route
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

//first route calls as "root route" & rest of our routes will render inside it.It serves as the root layout of the UI
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
