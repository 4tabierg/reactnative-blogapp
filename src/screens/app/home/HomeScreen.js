import { useState } from 'react';
import { Alert, Keyboard, StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native';
import NewBlogForm from '../../../components/blog-form/NewBlogForm';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import { addNewBlog } from '../../../library/network/requests/blogs';

const HomeScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(true);

    const handleAddNewBlog = async ({ title, blogContent, author }) => {
        setIsLoading(true);
        const response = await addNewBlog({ title, blogContent, author });
        if (response && response.status === 201) {
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
            Alert.alert("Oops...", "Something went wrong!")
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                {isLoading ? <LoadingSpinner />
                    :
                    <>
                        {/* <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                            <Button onPress={() => setIsFormVisible(prevState => !prevState)} buttonTitle={"Toggle Form"} />
                        </View> */}
                        {isFormVisible && <NewBlogForm handleAddNewBlog={handleAddNewBlog} />}
                    </>
                }
            </View>
        </TouchableWithoutFeedback>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
