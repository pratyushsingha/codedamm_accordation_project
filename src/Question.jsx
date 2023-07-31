import React, { useState } from 'react'

const Question = ({ title, info }) => {
    const [infoShow, setInfoShow] = useState(false)
    const [button, setbutton] = useState("+")

    const buttonHandler = () => {
        setInfoShow(!infoShow)
        setbutton(infoShow ? "+" : "-")

    }

    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button onClick={buttonHandler} className='btn'>
                    {button}
                </button>
            </header>
            {infoShow && <p>{info}</p>}
        </article>
    )
}

export default Question


