import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import theme from '@/src/styles/theme';

export default ({ chartData }: { chartData: ChartData }) => {
    const width = Dimensions.get("window").width * 0.85;
    return (
        <LineChart
            data={chartData}
            width={width}
            height={240}
            withVerticalLines={false}
            withHorizontalLabels={true}
            xLabelsOffset={6}
            yLabelsOffset={20}
            chartConfig={{
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                fillShadowGradientFrom: theme.colors.lightCyan,
                fillShadowGradientFromOpacity: 0.4,
                fillShadowGradientTo: theme.colors.darkCyan, 
                fillShadowGradientToOpacity: 0.2,
                color: () => theme.colors.lightCyan,
                labelColor: () => theme.colors.white, 
                decimalPlaces: 0,
                strokeWidth: 2,
                propsForBackgroundLines: {
                    stroke: theme.colors.darkCyan,
                    strokeDasharray: "5, 5",
                    strokeWidth: 0.5,
                },
                
            }}
            style={{
                width: width,
                paddingRight: 50
            }}
            bezier
        />
    );
};
