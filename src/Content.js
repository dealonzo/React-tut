import React from 'react'
import {  useState } from 'react'

const Content = () => {

    const [name, setName] = useState('Denis')

    const handleChangeName = () => {
        const names = ['Dave','Martin','Louis']
        const random = Math.floor(Math.random() * 3)
        setName(names[random]);
    }

    const handleClick = () => {
        console.log('Button has been clicked!')
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
    }

    const handleClick3 = (e) => {
        console.log(e.target)
    }

    return (
        <main>
            <p>
            Hello {name}!
            </p>
            <button onClick={handleChangeName}>Change Name</button>
            <button onClick={() => handleClick2('Denis')}>Click Me!</button>
            <button onClick={(e) => handleClick3(e)}>Click Me!</button>
        </main>
    )
}

export default Content