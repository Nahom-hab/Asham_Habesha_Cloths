import React from 'react';
import './Azi.css'; // Import the CSS file for styles

export default function Azi() {
    return (
        <div className='ml-44 mt-10 relative mb-44 pb-72 flex'>
            <div className='w-[425px] h-[250px] first  absolute top-4 left-20 rounded-2xl -rotate-12  hover:slide-up'></div>
            <div className='w-[425px] h-[250px] second absolute top-16 left-[300px] rounded-2xl -rotate-12 bg-green-500 hover:slide-up'></div>
            <div className='w-[425px] h-[250px] third absolute top-32 left-[500px] rounded-2xl -rotate-12 bg-red-500 hover:slide-up'></div>
            <div className='w-[425px] h-[250px] fourth absolute top-56 left-[700px] rounded-2xl -rotate-12 bg-yellow-500 hover:slide-up'></div>
        </div>
    );
}
