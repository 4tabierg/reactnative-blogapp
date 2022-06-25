import { View, Text, } from 'react-native'
import React, { useState, useEffect, createContext } from 'react'
import { getData, storeData } from '../library/helpers/asyncStorage';

export const FavoritedBlogContext = createContext();


const FavoritedBlogProvider = ({ children }) => {

    const [favoritedBlogList, setFavoritedBlogList] = useState([]);

    useEffect(() => {
        const getFavoritedBlogs = async () => {
            const _favoritedBlogList = await getData("favoritedBlogs");
            _favoritedBlogList && setFavoritedBlogList(_favoritedBlogList)
        }
        getFavoritedBlogs();
    }, []);


    const handleFavorite = (blogId) => {
        if (favoritedBlogList.includes(blogId)) {
            const _favoritedBlogList = favoritedBlogList.filter(id => id !== blogId)
            setFavoritedBlogList(_favoritedBlogList)
            storeData("favoritedBlogs", _favoritedBlogList)
        }
        else {
            const _favoritedBlogList = [...favoritedBlogList, blogId]
            setFavoritedBlogList(_favoritedBlogList)
            storeData("favoritedBlogs", _favoritedBlogList)
        }
    }

    return (
        <FavoritedBlogContext.Provider value={{ favoritedBlogList, handleFavorite }}>
            {children}
        </FavoritedBlogContext.Provider>
    )
}

export default FavoritedBlogProvider