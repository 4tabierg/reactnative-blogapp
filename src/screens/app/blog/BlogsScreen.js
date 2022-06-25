import { useContext, useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Button from '../../..//components/common/Button';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import { FavoritedBlogContext } from '../../../contexts/FavoritedBlogContext';
import BlogList from '../../../components/blog-list/BlogList';
import Searchbar from '../../../components/shared/searchbar/Searchbar';
import { deleteBlogById, getBlogs } from '../../../library/network/requests/blogs';
import colors from '../../../style/shared/colors/colors';

const BlogsScreen = ({ navigation }) => {

    console.log("BlogsScreen")

    const { favoritedBlogList } = useContext(FavoritedBlogContext)

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    const [blogList, setBlogList] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isFavoriteFilterOn, setIsFavoriteFilterOn] = useState(false)

    const getBlogList = async () => {
        setIsLoading(true)
        const res = await getBlogs();
        setBlogList(res.data);
        setIsLoading(false)
    }

    // useEffect(() => {
    //     getBlogList()
    // }, []);

    useEffect(() => {
        navigation.addListener('focus', () => getBlogList());
    }, [])


    const handleSearch = (search) => {
        setSearchTerm(search);
        if (search.trim()) {
            setSearchResults(() => blogList.filter(blog => blog.title.toLowerCase().trim().includes(search.toLowerCase().trim()) && blog))
        }
        else {
            setSearchResults([]);
        }
    }

    const handleDelete = (id) => {
        Alert.alert("O-oh", "Are you sure to delete this blog?", [
            {
                text: "Yes!",
                onPress: async () => {
                    setIsLoading(true)
                    const res = await deleteBlogById(id)
                    if (res && res.status === 200) {
                        getBlogList();
                    }
                    else {
                        setIsLoading(false)
                        Alert.alert("Oops", "Something went wrong!")
                    }
                },
                style: "danger"
            },
            {
                text: "Oh no!",
                style: "cancel"
            }
        ])
    }

    const blogListData = () => {
        if (isFavoriteFilterOn) {
            if (searchResults.length > 0) {
                return searchResults.filter(blog => favoritedBlogList.includes(blog.id) && blog)
            }
            else {
                return blogList.filter(blog => favoritedBlogList.includes(blog.id) && blog)
            }
        }
        else {
            if (searchResults.length > 0) {
                return searchResults
            }
            else {
                return blogList
            }
        }
    }

    return (
        <View>
            {isLoading ? <LoadingSpinner />
                :
                <>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Searchbar handleSearch={handleSearch} searchTerm={searchTerm} style={{ flex: 2.5, marginRight: 10, marginTop: 10 }} />
                        <Button
                            buttonTitle={"Favorites"}
                            onPress={() => setIsFavoriteFilterOn(prevState => !prevState)}
                            buttonStyle={{ backgroundColor: isFavoriteFilterOn ? "darkred" : colors.main }}
                        />
                    </View>
                    {
                        blogList &&
                        <BlogList
                            data={blogListData()}
                            handleDelete={handleDelete}
                            navigation={navigation} />
                    }
                </>
            }
        </View>
    )
}

export default BlogsScreen

const styles = StyleSheet.create({})