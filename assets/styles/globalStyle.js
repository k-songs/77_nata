import { StyleSheet } from 'react-native';
import { getFontFamily } from '../fonts/helper';
import {horizontalScale} from './scaling';
import {verticalScale} from './scaling';
import {scaleFontSize} from './scaling';


const globalStyle = StyleSheet.create({
  header: {
    paddingTop: verticalScale(50),
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageIcon: {
    padding: horizontalScale(14),
    backgroundColor: '#F9FAFB',
    borderRadius: horizontalScale(100),
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: horizontalScale(10),
    height:horizontalScale(10),
    borderRadius: horizontalScale(10),
    alignItems: 'center',
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(10),
},
  messageNumberText: {
    color: '#fff',
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily('inter', '600'),
  },
  userStoriesContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
  userPostsContainer: {
    marginHorizontal: horizontalScale(24),
  },
});
export default globalStyle;
