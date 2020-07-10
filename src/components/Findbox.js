import React from 'react';

const Findbox = ({ Searchfield, Searchchange }) => {
    return(
        <div className='pa2'>
        <input className='pa3 ba--green bg-lightest-blue'
        type='search' placeholder='search robots'
        onChange={Searchchange}
        />
        </div>
    );
}

export default Findbox;