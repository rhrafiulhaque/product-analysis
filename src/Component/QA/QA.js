import React from 'react';

const QA = () => {
    return (
        <div >
            <div className='my-20 mx-20'>
                <h1 className=' font-semibold text-2xl mb-5'>What is Context API?</h1>
                <div className="answer text-lg">
                <p>Context Api is a feature of React Framework. It is produce global variables. </p>
                <p>We are Acessing the Values of Variable from the Global Variables</p>
                <p> So We donot Have to call the variable from another to another Component</p>
                <p>It return consumer and provider. when wer called it global then we are taken data as a consumer</p>
                <p>It is not like prop drilling So we are easily accessing the Global Data from any where.</p>
                </div>
            </div>
            <div className='my-20 mx-20'>
                <h1 className=' font-semibold text-2xl mb-5'>What is Semantic Tag?</h1>
                <div className="answer text-lg">
                    <p>Semantic Tag such as header footer article, it describe what is the type of element we are code</p>
                    <p>It act like div Element they group other element iton page section</p>
                    <p> Using Semantic tag it is much easier to read.</p>
                    <p>When we are reading a code of HTML then it easily notice that what code they are type. </p>
                    <p> This is easier to reade and understand that easier to modify the code.</p>
                    <p> It is the feature of HTML5 </p>
                </div>
            </div>
        </div>
    );
};

export default QA;