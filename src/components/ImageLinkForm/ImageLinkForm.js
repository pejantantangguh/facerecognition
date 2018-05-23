import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your picture, give it a try'}
            </p>
            <div className='form'>
                <div className = 'pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-two-thirds-ns center' type='text' />
                    <button className='w-third-ns grow f4 link ph3 pv2 dib grey bg-light-purple'> Detect </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;
