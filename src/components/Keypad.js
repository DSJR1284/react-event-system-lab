// Code Keypad Component Here

import React from 'react'

const Keypad = () => {

    handlepassword = () => {
        console.log('Entering password...')
    }

    return (
        <div>
            <input type="text" onKeyUp={this.handlepassword}>
            </input>
        </div>
    )
}

export default Keypad

