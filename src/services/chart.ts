import statDB from '@/src/services/user-statistic';
import format from '@/src/utils/date';
import useUserStatisticStore from '@/src/stores/user-statistic';

const getSingleData = (startDate: string, endDate: string) => {
    const CHART_COLUMN = 7;
    const statList = statDB.selectByRange(startDate, endDate);
    const todayStat = useUserStatisticStore.getState().userStatistic;
    const sum = statDB.sumAll();

    const datas = statList.map((item) => item);
    const todayStat2 = datas.find(item => item.statDate === todayStat.statDate);
    if(todayStat2) {
        todayStat2.exp += todayStat.exp - sum.exp;
        todayStat2.steps += todayStat.steps - sum.steps;
        todayStat2.distance += todayStat.distance - sum.distance;
    }
    return datas;
}

const getSingleChartData = (prop: UserParamProperty): ChartData => {
    const CHART_COLUMN = 7;
    const statList = statDB.selectByRange(format.getDateFromToday(-CHART_COLUMN), format.getToday());
    const todayStat = useUserStatisticStore.getState().userStatistic;
    const todayDeltaProp = todayStat[prop] - statDB.sumAll()[prop];
    const datas: number[] = statList.map((item) => item[prop] + (item.statDate === todayStat.statDate ? todayDeltaProp : 0));
    return {
        labels: Array.from({ length: CHART_COLUMN }, (_, i) => format.getDateFromToday(i - CHART_COLUMN + 1).substring(5)),
        datasets: [ { data: datas } ],
    };
}

type RangeDataValueParam = "avg" | "sum";
const deltaDayMap = {
    week1: 7,
    week2: 14,
    month1: 30,
    month3: 90,
    month6: 180,
    year1: 365,
}
const getRangeChartData = (prop: UserParamProperty, valueType: RangeDataValueParam, rangeType: DateRangeType): ChartData => {
    const CHART_COLUMN = 7;
    const dateSize = deltaDayMap[rangeType];
    const statList = statDB.selectByRange(format.getDateFromToday(-dateSize), format.getToday());
    const labels: string[] = [];
    const datas: number[] = [];
    const todayStat = useUserStatisticStore.getState().userStatistic;
    const todayDeltaProp = todayStat[prop] - statDB.sumAll()[prop];

    let sum = 0, columnIdx = 1;
    for(let i = 1; i <= dateSize; i++) {
        const stat = statList[i - 1];
        if(stat.statDate === format.getDateFromToday(i - dateSize)) {
            sum += stat[prop] + (stat.statDate === todayStat.statDate ? todayDeltaProp : 0)
        }
        if(i * CHART_COLUMN >= columnIdx * dateSize) { //  i / dateSize >= columnIdx / CHART_COLUMN
            if(valueType === "sum") {
                datas.push(sum);
            } else {
                datas.push(Math.floor(sum / (dateSize / CHART_COLUMN)));
                sum = 0;
            }
            labels.push(format.getDateFromToday(-(1 - columnIdx / CHART_COLUMN) * dateSize).substring(5));
            columnIdx++;
        }
    }
    if(datas.length === 0) {
        datas.push(0);
        labels.push(format.getToday());
    }
    return {
        labels: labels,
        datasets: [ { data: datas } ],
    };
}

export default {
    getSingleData: getSingleData,
    getSingleChartData: getSingleChartData,
    getRangeChartData: getRangeChartData,
}
