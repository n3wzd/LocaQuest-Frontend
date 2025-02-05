import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
    screen: {
        backgroundColor: theme.colors.darkSpace,
        padding: 15,
    },
    container: {
        padding: 15,
        borderRadius: 10,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: theme.colors.white,
        fontSize: 14,
        fontFamily: theme.fonts.text,
    },
    boldText: {
        color: theme.colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: theme.fonts.text,
    },
    subText: {
        color: theme.colors.lightGrey,
        fontSize: 12,
        fontFamily: theme.fonts.text,
    },
    title: {
        color: theme.colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: theme.fonts.title,
    },
    badgeImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 15,
        marginTop: 5,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginBottom: 10,
    },
  });
