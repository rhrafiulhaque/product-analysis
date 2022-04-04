import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyLineChart from '../MyLineChart/MyLineChart';

const Dashboard = () => {
    return (
        <div className='mb-20'>
            <h1 className='my-5 text-center font-semibold text-5xl underline mb-10'>Welcome To The Dash Board</h1>
            <div className='grid grid-cols-2'>
                <MyLineChart></MyLineChart>
                <MyAreaChart></MyAreaChart>
            </div>
        </div>
    );
};

export default Dashboard;