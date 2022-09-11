import React from 'react'

const Footer = ({ length }) => {

    const today = new Date()    

    return (
        <footer>
            <p>{ length } {length == 1 ? 'item' : 'items'} in sale</p>
        </footer>
    )
}

export default Footer