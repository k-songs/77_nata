import React ,{useContext}from 'react';
import { View, Text, Button  } from 'react-native';
import { ThemeContext } from "./ThemeContext";


interface HomeScreenProps {
    toggleTheme: () => void;
}

const HomeScreen = ({ toggleTheme }: HomeScreenProps) => {
    const isDarkMode = useContext(ThemeContext);
    return (
        <View style={{backgroundColor: isDarkMode ? 'black' : 'white'}}>
            <Text style={{color: isDarkMode ? 'white' : 'black'}}>Home Screen 입니다.</Text>
            <Button title='Toggle Theme from Home' onPress={toggleTheme} />
        </View>
    );
};

export default HomeScreen;
