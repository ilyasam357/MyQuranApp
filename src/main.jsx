import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './pages/App'
import DetailSurah from './pages/detailSurah';
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/detailSurah/:surahNumber",
    element: <DetailSurah/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
