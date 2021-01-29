import React from 'react'

const person = (props) => {
    return <p className="text-center" onClick={props.click}>Hello, i'm {props.name}</p>
}

export default person