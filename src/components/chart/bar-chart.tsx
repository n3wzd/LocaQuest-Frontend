import React from 'react';
import { Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import theme from '@/src/styles/theme';

export default ({ chartData }: { chartData: ChartData }) => {
    return (
        <BarChart
            data={chartData}
            width={Dimensions.get("window").width * 0.85}
            height={240}
            yAxisSuffix=""
            yAxisLabel=""
            showBarTops={false}
            showValuesOnTopOfBars={true}
            withHorizontalLabels={false}
            chartConfig={{
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                fillShadowGradientFrom: theme.colors.lightCyan,
                fillShadowGradientFromOpacity: 0.9,
                fillShadowGradientTo: theme.colors.darkCyan, 
                fillShadowGradientToOpacity: 0.9,
                color: () => theme.colors.lightCyan,
                labelColor: () => theme.colors.white, 
                barPercentage: 0.7,
                decimalPlaces: 0,
                barRadius: 12,
                propsForBackgroundLines: {
                    stroke: theme.colors.darkCyan,
                    strokeDasharray: "5, 5",
                    strokeWidth: 0.5,
                },
            }}
            style={{
                paddingRight: 0
            }}
        />
    );
};
