import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const ChartComponent = ({ values }: { values: number[] }) => {
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            data: values,
        }],
    };
    return (
        <View>
        <Text>주간 걸음 수</Text>
        <BarChart
            data={data}
            width={320}
            height={220}
            yAxisSuffix="$"
            yAxisLabel="@"
            chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#f2f2f2",
            color: (opacity = 1) => `rgba(0, 128, 255, ${opacity})`,
            labelColor: () => "#000000", 
            barPercentage: 0.5,
            }}
            verticalLabelRotation={30}
        />
        </View>
    );
};

export default ChartComponent;
