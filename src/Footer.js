import React from 'react'

type Props = {}

const Footer = (props: Props) => {

    const today = new Date()    

    return (
        <footer>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer