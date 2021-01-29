import React from 'react'
import pic from './img/gambar-sarip-2.jpg'

const logo = (props) => {

    return (
        <div className="mb-6 pt-10">
            <img className="w-32 rounded-full mx-auto shadow-lg" src={pic} alt="handsome me"></img>
            <p className="font-sans mt-2 text-white text-lg">Hafiuddin Sharif</p>
        </div>
    )
}

export default logo