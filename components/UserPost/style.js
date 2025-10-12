import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import {horizontalScale} from '../../assets/styles/scaling';
import {scaleFontSize} from '../../assets/styles/scaling';
import {verticalScale} from '../../assets/styles/scaling';
const style = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {
    marginLeft: horizontalScale(10),
    justifyContent: 'center',
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    fontFamily: getFontFamily('Inter', '600'),
    color: '#000',
    fontSize: scaleFontSize(16),
  },
  location: {
    fontFamily: getFontFamily('Inter', '400'),
    color: '#79869F',
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  userPostContainer:{
    marginTop: verticalScale(35),
    paddingBottom: verticalScale(20),
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1',
  },
  userPostStats:{marginLeft: horizontalScale(20),flexDirection: 'row'},
  userPostStatButton:{flexDirection: 'row'},
  userPostStatButtonRight:{flexDirection: 'row', marginLeft: horizontalScale(27)},
  userPostStatText:{marginLeft: horizontalScale(3) ,color: '#79869F'},
});

export default style;
