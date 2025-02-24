import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions, TouchableOpacity } from 'react-native';
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';
import useDrawerStore from '@/src/stores/drawer';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useUserDataStore from '@/src/stores/user-data';
import useUserStatisticStore from '@/src/stores/user-statistic';
import DrawerItem from '@/src/components/drawer/drawer-item';
import Seperator from '@/src/components/drawer/drawer-seperator';
import tokenManager from '@/src/utils/token';
import { useRouter } from 'expo-router';
import ProfileBar from '../status/profile-bar';

const { width } = Dimensions.get("window");
const ANIMATION_DURATION = 300;

export default () => {
    const router = useRouter();
    const { userStatistic } = useUserStatisticStore();
    const { userData } = useUserDataStore();
    const { visibleDrawer, closeDrawer } = useDrawerStore();
    const animation = useSharedValue(0);
    const overlayAnimatedStyle = useAnimatedStyle(() => {
        return { opacity: withTiming(animation.value, { duration: ANIMATION_DURATION }) };
    });
    const drawerAnimatedStyle = useAnimatedStyle(() => {
        return { transform: [{ translateX: withTiming((1 - animation.value) * width, { duration: ANIMATION_DURATION }) }] };
    });

    useEffect(() => {
        if(visibleDrawer) {
            animation.value = 1;
        }
    }, [visibleDrawer]);

    const onClose = () => {
        animation.value = 0;
        setTimeout(() => closeDrawer(), ANIMATION_DURATION);
    }
    const handleProfileEdit = () => {
        router.push('/screens/user-update');
        closeDrawer();
    }
    const handleLogout = async () => {
        await tokenManager.removeToken();
        router.replace('/');
    }

    return visibleDrawer ? (
        <TouchableWithoutFeedback onPress={onClose}>
            <Animated.View style={[drawerStyles.overlay, overlayAnimatedStyle]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[drawerStyles.drawer, drawerAnimatedStyle]}>
                        <TouchableOpacity onPress={onClose} style={drawerStyles.closeButton}>
                            <Ionicons name="close" color={theme.colors.lightGrey} size={24} />
                        </TouchableOpacity>
                        <View style={{ width: '50%', padding: 10 }}>
                            <ProfileBar userStatistic={userStatistic} userData={userData} ></ProfileBar>
                        </View>
                        <View style={[styles.columnContainer, { alignItems: "flex-start" }]}>
                            <DrawerItem text='프로필 변경' icon='pencil' onPress={handleProfileEdit}/>
                            <Seperator/>
                            <DrawerItem text='로그아웃' icon='backspace-outline' onPress={handleLogout}/>
                        </View>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </Animated.View>
        </TouchableWithoutFeedback>
    ) : null;
};

const drawerStyles = StyleSheet.create({
    drawer: { 
        position: 'absolute',
        top: 0,
        right: 0,
        width: 260,
        height: '100%',
        backgroundColor: theme.colors.darkSpace,
        borderRightWidth: 1,
        paddingTop: 10,
        zIndex: 2,
    },
    overlay: { 
        position: "absolute", 
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.35)',
        justifyContent: "flex-start",
        zIndex: 1,
    },
    closeButton: {
        padding: 20,
        borderRadius: 5,
        position: 'absolute',
        top: 0,
        right: 0,
    },
});
