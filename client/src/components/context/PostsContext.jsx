import React, { createContext } from "react";

import axios from "axios";

export const PostsContext = createContext()

export const PostsContextProvider = ({children}) => {

    const onUpdatePost = async (user) => {
        const newValue = !user.is_followed
        const id = user._id
        const data = {is_followed: newValue}
    
        const res =  await axios.put(`http://localhost:8001/tiktok/posts/${id}`, data)
        console.log(res.data)
    }

    const onListPosts = async () => {
        await axios.get("http://localhost:8001/tiktok/posts")
    }

    return (
        <PostsContext.Provider
            value={{
              updateFollow: onUpdatePost,
              listPosts: onListPosts,
        }}>
            {children}
        </PostsContext.Provider>
    )
}