import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import img from '../assets/couple1.jpeg'

export default function ViewProduct() {
    const location = useLocation()
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const data = location.state || {}
    return (
        <div className='pb-44  flex justify-center'>

            <div className='flex md:flex-row pt-5 flex-col'>
                <div>
                    {/* <img className='mb-6 rounded-xl w-full md:w-[400px] h-[480px] lg:w-[500px] lg:h-[550px] object-cover' src={data.images[0]} alt={data.name} /> */}
                    <img className='mb-6 rounded-xl w-full md:w-[400px] h-[480px] lg:w-[500px] lg:h-[550px] object-cover' src={img} />

                </div>
                <div className='px-8 md:w-[600px]'>
                    <div className='font-bold pb-2 text-2xl'>Habesha Libs</div>
                    <div className=''><span className='font-bold'>Discription: </span>thi sis an habesha libs of ethiopia</div>
                    <div className='text-lg text-green-600'><span className='font-bold'>Price: </span>100,000 birr</div>
                </div>
            </div>

        </div>
    )
}
