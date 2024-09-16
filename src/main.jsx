import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TopAnimePages from './pages/TopAnimePages.jsx'
import TopMangaPages from './pages/TopMangaPages';
import AnimeDetailPages from './pages/AnimeDetailPages.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,  // App berisi Navbar dan Outlet
    children: [
      {
        path: '/',
        element: <TopAnimePages />  // Rute untuk halaman About
      },
      {
        path: '/anime/:mal_id',
        element: <AnimeDetailPages />  // Rute untuk halaman About
      },
      {
        path: '/top-manga',
        element: <TopMangaPages />  // Rute untuk halaman About
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
