
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Blog from '../pages/Blog';
import Content from '../components/content/Content';
import Author from '../components/author/Author';
import Bookmarks from '../pages/Bookmarks';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7')
      },
      {
        path: "/blog/:id",
        element: <Blog></Blog>,
        loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
          {
            index: true,
            element: <Content></Content>,
            loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path:"author",
            element: <Author></Author>,
            loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          }
        ]

      },

      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
        loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7')
      },
    ]
  },

]);