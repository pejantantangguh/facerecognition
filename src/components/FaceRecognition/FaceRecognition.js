import React from 'react';

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className='ma tc'>
            <div className='mt2'>
                <img id='inputimage' src={imageUrl} alt='Just sample' width='500px' height='auto'/>
            </div>
        </div>
    )
}


export default FaceRecognition;
