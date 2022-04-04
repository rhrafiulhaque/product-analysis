import React from 'react';

const ReviewShow = (props) => {
    const {name,message,ratings} = props.review;
    return (
        <div className='shadow-lg rounded-2xl w={250px} bg-white p-4 mt-10'>
            <h1 className='font-semibold pb-4 '>Author Name: {name}</h1>
            <p>{message}</p>
            <p className='font-semibold pt-4'>Ratings: {ratings}</p>
        </div>
    );
};

export default ReviewShow;