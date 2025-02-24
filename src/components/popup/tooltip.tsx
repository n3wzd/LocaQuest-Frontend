import React, { ReactNode, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Modal, Dimensions, TouchableWithoutFeedback } from "react-native";
import styles from '@/src/styles/common';
import theme from '@/src/styles/theme';

export default ({ text, boxWidth = 160, children }: { text: string, boxWidth?: number, children: ReactNode }) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const touchableRef = useRef<View | null>(null);
    const tooltipTextRef = useRef<Text | null>(null);
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;

    const showTooltip = () => {
        if (touchableRef.current) {
            touchableRef.current.measureInWindow((x, y, width, height) => {
                let newX = x - boxWidth / 2;
                let newY = y + height + 5;

                if (newX + 150 > screenWidth) newX = screenWidth - 160;
                if (newY + 50 > screenHeight) newY = y - 55;

                setPosition({ x: newX, y: newY });
                setVisible(true);
            });
        }
    }

    return (
        <>
            <TouchableOpacity onPress={showTooltip} ref={touchableRef}>
                {children}
            </TouchableOpacity>
            <Modal transparent visible={visible} animationType="none" onRequestClose={() => setVisible(false)}>
                <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                    <View style={{ flex: 1 }}>
                        <View style={{
                            top: position.y,
                            left: position.x,
                            backgroundColor: theme.colors.darkSpace,
                            padding: 6,
                            borderRadius: 5,
                            elevation: 5,
                            width: boxWidth,
                            alignItems: 'center'
                        }}>
                            <Text ref={tooltipTextRef} style={styles.text}>{text}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    );
};
