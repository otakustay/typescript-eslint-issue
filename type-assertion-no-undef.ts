interface ChartDescription {
    type: string;
    name: string;
}

const isChartDescription = (config: any): config is ChartDescription => !!config.type;

isChartDescription({});
