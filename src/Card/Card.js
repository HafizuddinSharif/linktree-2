import React from 'react'

const card = (props) => {

    // Clickable link
    let result = (
        <a href={props.url}>
            <div className='bg-white border-solid border-2 border-gray-400 my-6 mx-10 py-2 md:my-6 md:mx-16 md:py-2 transition duration-500 hover:bg-gray-400 hover:text-white rounded-full'>
                <p>{props.name}</p>
            </div>
        </a>
    )

    // Change click to copy
    if (props.title) {
        result = (
            <div className='bg-white border-solid border-2 border-gray-400 my-6 mx-16 py-2 transition duration-500 hover:bg-gray-400 hover:text-white rounded-full'>
                <p>{props.name}</p>
            </div>
        )
    }

    return (
        <div>
            {result}
        </div>
    )
}

export default card