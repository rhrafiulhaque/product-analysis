import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../Hooks/useChart';

const MyAreaChart = () => {
    const [chartData,setChartData] = useChart();
    return (
        <div>
            <div className='mx-20'>
            <AreaChart width={400} height={500} data={chartData}>
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Area type="monotone" stroke="#8884d8" fill="#8884d8" dataKey={'sell'}></Area>
            </AreaChart>
            </div>
        </div>
    );
};

export default MyAreaChart;