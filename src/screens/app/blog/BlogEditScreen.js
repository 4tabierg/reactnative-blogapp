import { StyleSheet, TextInput, View, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getBlogById, updateBlog } from '../../../library/network/requests/blogs';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import Button from '../../../components/common/Button';

const BlogEditScreen = ({ route }) => {
    //const blog = blogs.find((blog) => blog.id === route.params.blogId)
    //console.log("blog", route.params.blogId)

    const [blog, setBlog] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [blogTitle, setBlogTitle] = useState("");
    const [blogContent, setBlogContent] = useState("");
    const [blogAuthor, setBlogAuthor] = useState("");

    const handleUpdate = async () => {
        if (blogTitle != blog.title || blogContent != blog.blogContent || blogAuthor != blog.author) {
            if (blogTitle && blogContent && blogAuthor) {
                setIsLoading(true);
                const response = await updateBlog(route.params.blogId, { title: blogTitle, blogContent, author: blogAuthor });
                console.log(response.status);
                if (response && response.status === 200) {
                    setIsLoading(false);
                }
                else {
                    setIsLoading(false);
                    Alert.alert("Oops...", "Something went wrong!")
                }
            }
            else {
                Alert.alert("Oops", "Those cannot be empty: title, content and author")
            }
        }
    }


    const getBlog = async () => {
        setIsLoading(true)
        const res = await getBlogById(route.params.blogId);
        if (res && res.status === 200) {
            setBlog(res.data);
            setBlogTitle(res.data.title);
            setBlogContent(res.data.blogContent);
            setBlogAuthor(res.data.author);
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
        <ScrollView contentContainerStyle={styles.wrapper} style={{ flex:1, backgroundColor: "#fff", }}>
            {isLoading ? <LoadingSpinner /> :
                blog &&
                <View style={{ flex: 1, marginHorizontal: 5 }}>
                    <Button buttonTitle={"Update Blog"} buttonStyle={{ alignSelf: "flex-end" }} onPress={() => handleUpdate()} />
                    <TextInput autoCorrect={false} style={styles.blogTitle} value={blogTitle} onChangeText={text => setBlogTitle(text)} />
                    <TextInput autoCorrect={false} style={styles.blogContent} multiline value={blogContent} onChangeText={text => setBlogContent(text)} />
                    <TextInput autoCorrect={false} style={styles.author} value={blogAuthor} onChangeText={text => setBlogAuthor(text)} />
                </View>
            }
        </ScrollView>
    )
}

export default BlogEditScreen

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