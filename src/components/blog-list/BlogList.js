import { useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import BlogListItem from './BlogListItem';

const BlogList = ({ data, handleDelete, navigation }) => {

    const renderItem = ({ item }) => <BlogListItem blog={item} handleDelete={handleDelete} navigation={navigation} />

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 40, }}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default BlogList;

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
});
