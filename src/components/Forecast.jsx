import React from 'react';

function Forecast({title,data,className,cls,hover}) {
    return (
        <div className='bg-gray-900 bg-opacity-25 rounded-lg py-2 px-2 shadow-xl'>
            <div className='flex items-center justify-start mt-6'>
                <p className={`font-medium uppercase `}>{title}</p>
            </div>
            <hr className='my-1' />
            <div className={`flex items-center justify-between ${className} `}>
                {data.map((d, index) => ( // Added 'index' as the second parameter
                    <div 
                        key={index}  // Using 'index' as the key
                        className={`items-center justify-center  ${cls} `}>
                        <p>{d.title}</p>
                        <img 
                            src={d.icon}
                            alt="icon"
                            className='w-12 my-1' 
                        />
                        <p className='font-medium'>{`${d.temp.toFixed()}°`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;
