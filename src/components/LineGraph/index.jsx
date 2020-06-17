import React from 'react';
import { Chart } from "react-google-charts";

function LineGraph(props) {
    const {
        width='600px',
        height='400px',
        loader,
        data,
        hAxis,
        vAxis,
        rootProps,
        series,
        title,
        subtitle,
    } = props;

    return (
        <Chart
            width={width}
            height={height}
            chartType="LineChart"
            loader={loader ? loader : <div>Loading Chart</div>}
            data={data}
            options={{
                hAxis,
                vAxis,
                chart: {
                    title,
                    subtitle
                },
                legend: {position: 'right'}
            }}
            rootProps={rootProps}
            series={series}
        />
    );
}

export { LineGraph };