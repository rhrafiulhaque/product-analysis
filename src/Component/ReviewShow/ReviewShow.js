import React from 'react';

const ReviewShow = (props) => {
    console.log(props.review);
    const {name,message,ratings} = props.review;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default ReviewShow;