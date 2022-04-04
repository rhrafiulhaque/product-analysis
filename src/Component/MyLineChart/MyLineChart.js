import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import useChart from '../../Hooks/useChart';

const MyLineChart = () => {
    const [chartData,setChartData] = useChart();
    return (        
        <div>
            <div className='mx-20'>
            <LineChart width={400} height={500} data={chartData}>
                <Line type="monotone" stroke="#8884d8" dataKey={'sell'}></Line>
                <CartesianGrid stroke='#ccc'></CartesianGrid>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
            </LineChart>
            </div>
            
        </div>
    );
};

export default MyLineChart;