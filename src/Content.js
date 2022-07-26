import React from 'react'

type Props = {}

const Content = (props: Props) => {

    const handleChangeName = () => {
        const names = ['Dave','Martin','Louis']
        const random = Math.floor(Math.random() * 3)
        return names[random]
        }

    return (
        <main>
            <p>
            Hello {handleChangeName()}!
            </p>
        </main>
    )
}

export default Content