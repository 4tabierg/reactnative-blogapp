import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FavoritedBlogContext } from '../../contexts/FavoritedBlogContext';

const BlogListItem = ({ blog, handleDelete, navigation }) => {

    
    const { favoritedBlogList, handleFavorite, } = useContext(FavoritedBlogContext);

    //const [isFavorited, setIsFavorited] = useState(favoritedBlogList.includes(blog.id));

    // useEffect(() => {
    //     setIsFavorited(favoritedBlogList.includes(blog.id))
    // }, []);


    return (
        <TouchableOpacity onPress={() => navigation.navigate("BlogDetailScreen", { blogId: blog.id })}>
            <View style={styles.blog}>
                <View style={{ flexDirection: "row" }}>
                    <AntDesign name="edit" size={16} color="black" onPress={() => navigation.navigate("BlogEditScreen", { blogId: blog.id })} />
                    <AntDesign name={favoritedBlogList.includes(blog.id) ? "heart" : "hearto"} size={16} style={{ marginLeft: 8 }} color="darkred" onPress={() => handleFavorite(blog.id)} />
                    <Text style={styles.blogTitle}>{`${blog.title} `}</Text>
                    <AntDesign name="delete" size={16} color="darkred" onPress={() => handleDelete(blog.id)} />
                </View>
                <Text>{blog.blogContent.substring(0, 50) + "..."}</Text>
                <Text>{blog.author}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BlogListItem

const styles = StyleSheet.create({
    blog: {
        marginTop: 15,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        borderColor: "#bce",
        justifyContent: "space-around",
        alignItems: "center"
    },
    blogTitle: {
        flex: 24,
        textAlign: "center"
    }
})