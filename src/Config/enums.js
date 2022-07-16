export const ChartRange = {
    OneMonth: "1M",
    ThreeMonths: "3M",
    OneYear: "1Y",
    ThreeYears: "3Y",
    SevenYears: "7Y",
    All: "All",
};
export const ChartDesciption = Object.values(ChartRange).reduce((acc, x) => {
    return {
        ...acc,
        [x]: x,
    };
}, {});