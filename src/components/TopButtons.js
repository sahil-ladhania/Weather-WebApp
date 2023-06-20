import React from 'react'

const TopButtons = () => {
    // Make an Object for Cities.
    const cities = [
        {
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'Sydney'
        },
        {
            id: 3,
            title: 'Tokyo'
        },
        {
            id: 4,
            title: 'Toronto'
        },
        {
            id: 5,
            title: 'Paris'
        }
    ];

    return (
        <div>
            <>
                {/* TopButtons Main Container */}
                <div className='h-60 w-auto flex jc-se ai-c fd-row '>
                    {cities.map(city => (
                        <button 
                        className='p-5-10 bc-transparent b-1-transparent-solid fs-medium fw-600 pointer ls-1 popins' 
                        key={city.id}>
                            {city.title}
                        </button>
                    ))}
                </div>
            </>
        </div>
    )
}

export default TopButtons
