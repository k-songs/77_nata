import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import { scaleFontSize } from '../../assets/styles/scaling';
const style = StyleSheet.create({
    title: {
        fontSize: scaleFontSize(24),
        fontFamily: getFontFamily('inter', '600'),
        color: '#022150',
    },
});

export default style;