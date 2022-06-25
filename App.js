import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from "./src/components/shared/header/Header";
import FavoritedBlogProvider from './src/contexts/FavoritedBlogContext';
import MainStackNavigator from './src/navigators/index';
import { AuthProvider } from './src/contexts/AuthContext';
import colors from './src/style/shared/colors/colors';

export default function App() {

  return (
    <AuthProvider>
      <FavoritedBlogProvider>
        <NavigationContainer>
          <SafeAreaView style={{ backgroundColor: colors.main, flex: 0 }} />
          <SafeAreaView style={styles.safeAreaContainer}>
            <Header headerTitle={"BlogApp"} />
            <MainStackNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </FavoritedBlogProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.main,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
});
