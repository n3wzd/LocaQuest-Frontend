import statDB from '@/src/services/user-statistic';
import format from '@/src/utils/date';
import useUserStatisticStore from '@/src/stores/user-statistic';

const getRecentData = (prop: UserParamProperty): ChartData => {
    const CHART_COLUMN = 7;
    const statList = statDB.selectByRange(format.getDateFromToday(-CHART_COLUMN + 1), format.getToday());
    const datas: number[] = [];
    const todayDeltaProp = useUserStatisticStore.getState().userStatistic[prop] - statDB.sumAll()[prop];
    for(let i = 0; i < CHART_COLUMN; i++) {
        const day = i - CHART_COLUMN + 1;
        const item = statList.find(item => item.statDate === format.getDateFromToday(day));
        datas.push((item ? item[prop] : 0) + (day === 0 ? todayDeltaProp : 0));
    }
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
const getRangeData = (prop: UserParamProperty, valueType: RangeDataValueParam, rangeType: DateRangeType): ChartData => {
    const CHART_COLUMN = 7;
    const dateSize = deltaDayMap[rangeType];
    const statList = statDB.selectByRange(format.getDateFromToday(-dateSize + 1), format.getToday());
    const labels: string[] = [];
    const datas: number[] = [];
    const todayDeltaProp = useUserStatisticStore.getState().userStatistic[prop] - statDB.sumAll()[prop];

    let sum = 0, statListIdx = 0, columnIdx = 1;
    for(let i = 1; i <= dateSize; i++) {
        if(statList[statListIdx].statDate === format.getDateFromToday(i - dateSize)) {
            sum += statList[statListIdx][prop] + (i === dateSize ? todayDeltaProp : 0);
            statListIdx++;
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
    getRecentData: getRecentData,
    getRangeData: getRangeData,
}
