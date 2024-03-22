import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"

import BookmarkedBlog from "../components/bookmarkedblog/BookmarkedBlog";
import toast from "react-hot-toast";

const Bookmarks = () => {
  const [bookmarkedIds, setbookmarkedIds]= useState([]);
  const blogs = useLoaderData();
  useEffect(()=>{
    const localIds = localStorage.getItem('blogIds');
    const blogIds = JSON.parse(localIds)
    setbookmarkedIds(blogIds)
  }, [])


  const bookmarkedBlogs = blogs.filter((blog)=> bookmarkedIds.includes(blog.id) )
  const handledelete=(id)=>{
    const updatedIds = bookmarkedIds.filter((ids) =>ids !== id )
    setbookmarkedIds(updatedIds);
    const updatedLocalids = JSON.stringify(updatedIds);
    localStorage.setItem('blogIds', updatedLocalids);
    toast.error("Successfully deleted from bookmarks")
  }

  return (
   
<div className="grid max-w-6xl mx-auto justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-6">

{
  bookmarkedBlogs.map((blog)=> <BookmarkedBlog key={blog.id} handledelete={handledelete}  blog={blog}></BookmarkedBlog>)
}

</div>
   
  )
}

export default Bookmarks