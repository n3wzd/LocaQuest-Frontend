import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
    screen: {
        backgroundColor: theme.colors.darkSpace,
        flex: 1,
    },
    container: {
        padding: 15,
        borderRadius: 10,
    },
    containerDesigned: {
        padding: 15,
        borderRadius: 10,
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    columnContainer: {
        flexDirection: 'column',
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
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    popup: {
        width: 300,
        alignItems: "center",
        backgroundColor: theme.colors.lightSpace,
        padding: 15,
        borderRadius: 10,
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    },
    badgeImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 15,
        marginTop: 5,
    },
    profileImage: {
        borderRadius: 50,
    },
  });
