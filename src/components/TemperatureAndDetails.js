import React from 'react'
import { UilTemperature } from '@iconscout/react-unicons'
import { UilTear } from '@iconscout/react-unicons'
import { UilWind } from '@iconscout/react-unicons'
import { UilSun } from '@iconscout/react-unicons'
import { UilSunset } from '@iconscout/react-unicons'
import { UilArrowUp } from '@iconscout/react-unicons'
import { UilArrowDown } from '@iconscout/react-unicons'

const TemperatureAndDetails = () => {
    return (
        <div>
            <>
                {/* TemperatureAndDetails Main Container */}
                <div className='flex fd-c ai-c jc-c'>
                    {/* TemperatureAndDetails First Child */}
                    <div>
                        <h4>Clear</h4>
                    </div>
                    <br />
                    {/* TemperatureAndDetails Second Child */}
                    <div className='flex fd-r ai-c'>
                        <div>
                            <UilSun className='fill-orangered'/>
                            {/* <img src="" alt="" /> */}
                        </div>
                        <div className='ml-160 mr-50'>
                            <h2>18<sup>o</sup></h2>
                        </div>
                        <div className='flex fd-c ai-fs jc-c'>
                            <div 
                            className='flex ai-c mb-10'
                            >
                                <UilTemperature className='fill-aliceblue mr-5'/>
                                <p 
                                className='fs-smaller fw-600'
                                >
                                    Real fell : 17
                                    <sup>o</sup>
                                </p>
                            </div>
                            <div 
                            className='flex ai-c mb-10'
                            >
                                <UilTear className='fill-aquamarine mr-5'/>
                                <p
                                className='fs-smaller fw-600'
                                >
                                    Humidity : 45 %
                                </p>
                            </div>
                            <div 
                            className='flex ai-c mb-10'
                            >
                                <UilWind className='fill-antiquewhite mr-5'/>
                                <p
                                className='fs-smaller fw-600'
                                >
                                    Wind : 4 km/h
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* TemperatureAndDetails Third Child */}
                    <div className='flex fd-row ai-c jc-c mb-30'>
                        <div className='flex fd-row ai-c jc-c mr-10'>
                            <UilSun className='mr-5 fill-orange'/>
                            <p 
                            className='mr-5 fs-smaller fw-600'
                            >
                                Rise : 04:50 AM
                            </p>
                            <p 
                            className='fs-smaller fw-600'
                            >
                                |
                            </p>
                        </div>
                        <div className='flex fd-row ai-c jc-c mr-10'>
                            <UilSunset className='mr-5 fill-orangered'/>
                            <p
                            className='mr-5 fs-smaller fw-600'
                            >
                                Set : 09:17 PM
                            </p>
                            <p
                            className='fs-smaller fw-600'
                            >
                                |
                            </p>
                        </div>
                        <div className='flex fd-row ai-c jc-c mr-10'>
                            <UilArrowUp className='mr-5'/>
                            <p
                            className='mr-5 fs-smaller fw-600'
                            >
                                High : 19 
                                <sup>o</sup>
                            </p>
                            <p
                            className='fs-smaller fw-600'
                            >
                                |
                            </p>
                        </div>
                        <div className='flex fd-row ai-c jc-c mr-10'>
                            <UilArrowDown className='mr-5'/>
                            <p
                            className='mr-5 fs-smaller fw-600'
                            >
                                Low : 17 
                                <sup>o</sup>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default TemperatureAndDetails
