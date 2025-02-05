import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    header: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingHorizontal: 20,
      backgroundColor: '#ffffff',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    menuButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#007AFF',
    },
    menuText: {
      color: '#fff',
      fontSize: 20,
    },
    mapContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e0e0e0',
    },
    mapPlaceholder: {
      color: '#888',
      fontSize: 18,
    },
    navigationBar: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
    },
    navButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    navText: {
      fontSize: 16,
      color: '#007AFF',
    },
  });
  