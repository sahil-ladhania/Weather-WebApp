import React from 'react'
import { UilCloud } from '@iconscout/react-unicons'

const Forecast = () => {
    return (
        <div>
            <>
                {/* Forecast Main Container */}
                <div className='flex fd-c ai-fs ml-300 mb-50'>
                    {/* Forecast First Child */}
                    <div className='mb-10'>
                        <h3>HOURLY FORECAST</h3>
                    </div>
                    {/* Forecast Second Child */}
                    <div>
                        <hr />
                    </div>
                    {/* Forecast Third Child */}
                    <div className='flex fd-row ai-c'>
                        <div className='flex fd-c ai-c mr-100'>
                            <p className='fs-smaller fw-600 mb-10'>
                                01:00 PM
                            </p>
                            <UilCloud className='mb-10 fill-cornflowerblue'/>
                            <h5>
                                18 
                                <sup>o</sup>
                            </h5>
                        </div>
                        <div className='flex fd-c ai-c mr-100'>
                            <p className='fs-smaller fw-600 mb-10'>
                                02:00 PM
                            </p>
                            <UilCloud className='mb-10 fill-cornflowerblue'/>
                            <h5>
                                18 
                                <sup>o</sup>
                            </h5>
                        </div>
                        <div className='flex fd-c ai-c mr-100'>
                            <p className='fs-smaller fw-600 mb-10'>
                                03:00 PM
                            </p>
                            <UilCloud className='mb-10 fill-cornflowerblue'/>
                            <h5>
                                19 
                                <sup>o</sup>
                            </h5>
                        </div>
                        <div className='flex fd-c ai-c mr-100'>
                            <p className='fs-smaller fw-600 mb-10'>
                                04:00 PM
                            </p>
                            <UilCloud className='mb-10 fill-cornflowerblue'/>
                            <h5>
                                19 
                                <sup>o</sup>
                            </h5>
                        </div>
                        <div className='flex fd-c ai-c mr-100'>
                            <p className='fs-smaller fw-600 mb-10'>
                                05:00 PM
                            </p>
                            <UilCloud className='mb-10 fill-cornflowerblue'/>
                            <h5>
                                19 
                                <sup>o</sup>
                            </h5>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Forecast
