import React, { useState } from 'react';
import { MdBookmarkAdd } from "react-icons/md";
import { Link, Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import toast from 'react-hot-toast';


const Blog = () => {
    const [tabIndex, setTabIndex]= useState(0)
    const navigation = useNavigation()
    const blog = useLoaderData();
    const {title, comments_count,reading_time_minutes, public_reactions_count, published_at, tags} = blog
    
    const handleBookmark= (id)=>{
        let ids;
        const localblogIds = localStorage.getItem('blogIds')
        localblogIds  ? ids = JSON.parse(localblogIds):  ids = []

        !(ids.includes(id)) ? ids.push(id) & toast.success("Successfully added in bookmark")  : toast.error('Already Exists!')
        const newLocalids = JSON.stringify(ids)
        localStorage.setItem('blogIds', newLocalids);
    }


    if(navigation.state === "loading"){
        return <Loader></Loader>
    }


    return (
            <div className="max-w-3xl max-h-[calc(100vh-116px)] overflow-x-auto px-6 py-16 mx-auto space-y-12">
                <article className="space-y-8">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
                              
                            <p className="text-sm">{reading_time_minutes} min read. {' '} {new Date(published_at).toLocaleDateString()}</p>
                        
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {public_reactions_count} views</p>
                        </div>
                        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden justify-start flex-nowrap text-black">
                            <Link rel="noopener noreferrer" onClick={()=> setTabIndex(0)} to="" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===0? "border border-b-0" : "border-b"} text-secondary rounded-t-lg border-gray-400`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span>Content</span>
                            </Link>
                            <Link rel="noopener noreferrer" onClick={()=> setTabIndex(1)} to="author" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===1? "border border-b-0" : "border-b"} text-secondary  rounded-t-lg border-gray-400`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                                <span>Author</span>
                            </Link>
                            <div className='bg-primary p-3 rounded-full hover:bg-opacity-30 bg-opacity-20 mx-4 text-secondary' onClick={()=>{handleBookmark(blog.id)}}>
                                <MdBookmarkAdd></MdBookmarkAdd>
                            </div>
                        </div>
                    </div>
                    <div className="">
                       <Outlet></Outlet>
                    </div>

                </article>

            </div>
    );
};

export default Blog;