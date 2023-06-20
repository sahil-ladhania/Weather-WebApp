// Import React.
import React from 'react'
// Import Search Button.
import { UilSearch } from '@iconscout/react-unicons'
// Import Current Location Button.
import { UilLocationPinAlt } from '@iconscout/react-unicons'

const Inputs = () => {
    return (
        <div>
            <>
                {/* Inputs Main Container */}
                <div 
                className='flex fd-row jc-se ai-c h-50'
                >
                    {/* Inputs First Child */}
                    <div
                    className='flex fd-row jc-c ai-c'
                    >
                        <input 
                        type="search" 
                        name="search" 
                        placeholder='search your city...'
                        className='h-30 w-200 p-3-10 b-1-black-solid b-darkgray br-10 search mr-20'
                        />
                        <UilSearch 
                        className='mr-5 search-button pointer fill-red'
                        />
                        <UilLocationPinAlt
                        className='ml-5 current-location-button pointer fill-midnightblue'
                        />
                    </div>
                    {/* Inputs Second Child */}
                    <div 
                    className='flex fd-row jc-c ai-c'
                    >
                        <button
                        className='mr-10 bc-transparent b-1-transparent-solid fs-medium fw-600 pointer C-button'
                        >
                        <sup>o</sup>C
                        </button>
                        <p
                        className='fs-medium fw-600 c-b'
                        >
                        |
                        </p>
                        <button
                        className='ml-10 bc-transparent b-1-transparent-solid fs-medium fw-600 pointer F-button'
                        >
                        <sup>o</sup>F
                        </button>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Inputs
