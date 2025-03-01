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
    containerSimple: {
        padding: 15,
        borderRadius: 10,
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    },
    containerBlock: {
        padding: 15, 
        borderRadius: 12, 
        backgroundColor: theme.colors.lightSpace,
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
    designedTitle: {
        color: theme.colors.white,
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: theme.fonts.title,
    },
    fancyText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.white,
        textShadowColor: theme.colors.lightShadow,
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 2,
        fontFamily: theme.fonts.title,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    popup: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        backgroundColor: theme.colors.lightSpace,
        padding: 15,
        borderRadius: 10,
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    },
    badgeImage: {
        borderRadius: 100,
    },
  });
