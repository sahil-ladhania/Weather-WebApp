import React from 'react'

const TimeAndLocation = () => {
    return (
        <div>
            <>
                {/* TimeAndLocation Main Container */}
                <div 
                className='flex fd-c ai-c jc-c'>
                    {/* TimeAndLocation First Child */}
                    <div 
                    className='flex fd-r mb-30'>
                        <p 
                        className='mr-10 fs-small fw-600'>
                            Tuesday, 31 May 2022
                        </p>
                        <p 
                        className='fs-small fw-600'>
                            |
                        </p>
                        <p 
                        className='ml-10 fs-small fw-600'>
                            Local time : 12:17 PM
                        </p>
                    </div>
                    {/* TimeAndLocation Second Child */}
                    <div 
                    className=''>
                        <h1 
                        className=''>
                        Berlin, DE
                        </h1>
                    </div>
                </div>
            </>
        </div>
    )
}

export default TimeAndLocation
