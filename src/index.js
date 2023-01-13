import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';
import MusicBtn from './components/SearchButton/SearchButtonLists/MusicBtn';
import LiveBtn from './components/SearchButton/SearchButtonLists/LiveBtn';
import GameBtn from './components/SearchButton/SearchButtonLists/GameBtn';
import NewsBtn from './components/SearchButton/SearchButtonLists/NewsBtn';
import MoviesBtn from './components/SearchButton/SearchButtonLists/MoviesBtn';
import SportsBtn from './components/SearchButton/SearchButtonLists/SportsBtn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: 'videos', element: <Videos /> },
      { path: 'videos/:keyword', element: <Videos /> },
      { path: 'videos/watch/:videoId', element: <VideoDetail /> },
      // Videos/Music/:videoId
      { path: 'Videos/Music', element: <MusicBtn /> },
      { path: 'Videos/Live', element: <LiveBtn /> },
      { path: 'Videos/games', element: <GameBtn /> },
      { path: 'Videos/News', element: <NewsBtn /> },
      { path: 'Videos/Movies', element: <MoviesBtn/>},
      { path: 'Videos/Sports', element: <SportsBtn /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
