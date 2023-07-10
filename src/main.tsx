import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from './global.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.tsx'
import Profile from './routes/Profile/index.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import { ChakraProvider } from '@chakra-ui/react'

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)

