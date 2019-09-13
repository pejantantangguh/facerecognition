import React from 'react';

const Navigation = () => {
    return (
        <nav style={{display:'flex', 
                    justifyContent : 'flex-end',
                    background: '#e0eafc', 
                    background: '-webkit-linear-gradient(to right, #e0eafc, #cfdef3)',  /* Chrome 10-25, Safari 5.1-6 */
                    background: 'linear-gradient(to right, #e0eafc, #cfdef3)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}}>
        <p className ='f3 link dim black underline pa3 pointer grey'> Sign Out </p>
        </nav>
    )
}

export default Navigation;