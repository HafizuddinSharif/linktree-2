import React from 'react'
import Card from '../Card/Card'

const bigCard = (props) => {

    return (
    <div className='bg-white inline-block w-4/5 md:w-2/5 rounded-xl shadow-xl'>
        <Card url='https://twitter.com/sharippu' name='Twitter' />
        <Card url='https://www.youtube.com/c/hafizuddinsharif' name='Youtube' />
        <Card url="https://github.com/HafizuddinSharif" name="Github" />
        <Card url="https://www.linkedin.com/in/hafizuddin-sharif-umar-sharif-606567160/" name="Linkedin" />
        <Card url='https://curiouscat.qa/hafizuddin_sharif' name='Curiouscat' />
    </div>
    )
}

export default bigCard
