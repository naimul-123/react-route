import React from 'react';
import { MdBookmarkRemove } from "react-icons/md";
import { Link } from 'react-router-dom';
import img404 from '../../assets/404.jpg'
const BookmarkedBlog = ({blog, handledelete}) => {
    const  {cover_image, title, published_at, description, id} = blog;
    
    return (
        
            <div className='relative flex'>
                <Link rel="noopener noreferrer" to={`/blog/${id}`} className="max-w-sm mx-auto group transition 5 border-2 border-primary  border-opacity-30">
                    
                    <img role="presentation" className="object-cover w-full rounded h-44 " src={cover_image|| img404} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs ">{new Date(published_at).toLocaleDateString()}</span>
                        <p>{description}</p>
                    </div>

                </Link>
                <div onClick={()=>handledelete(id)} className='absolute right-0  text-2xl bg-primary bg-opacity-25 rounded-full p-2 hover:scale-125 text-secondary'>
                <MdBookmarkRemove ></MdBookmarkRemove>
                </div>
                
            </div>

       
    );
};

export default BookmarkedBlog;