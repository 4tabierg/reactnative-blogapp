import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getBlogById } from '../../../library/network/requests/blogs';
import LoadingSpinner from '../../../components/common/LoadingSpinner';

const BlogDetailScreen = ({ route }) => {
    //const blog = blogs.find((blog) => blog.id === route.params.blogId)
    //console.log("blog", route.params.blogId)

    const [blog, setBlog] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const getBlog = async () => {
        setIsLoading(true)
        const res = await getBlogById(route.params.blogId);
        if (res && res.status === 200) {
            setBlog(res.data)
        }
        else {
            Alert.alert("Oops", "Something went wrong!")
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.wrapper} style={{ flex: 1, backgroundColor: "#fff", }}>
            {isLoading ? <LoadingSpinner /> :
                blog &&
                <View style={{ flex: 1 }}>
                    <Text style={styles.blogTitle}>{blog.title}</Text>
                    <Text style={styles.blogContent}>{blog.blogContent}</Text>
                    <Text style={styles.author}>- {blog.author}</Text>
                </View>
            }
        </ScrollView>
    )
}

export default BlogDetailScreen

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff",
        paddingBottom: 10,
    },
    blogTitle: {
        textTransform: "capitalize",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        color: "#aab",
        borderBottomColor: "#abc",
        borderBottomWidth: 3,
        borderRadius: 5,
        shadowColor: "black",
    },
    blogContent: {
        fontSize: 16,
        marginTop: 5,
        paddingHorizontal: 10,
        color: "#aab",
    },
    author: {
        textAlign: "right",
        textTransform: "capitalize",
        fontStyle: "italic",
        fontSize: 18,
        color: "#a99",
        textDecorationLine: "underline"
    }
})