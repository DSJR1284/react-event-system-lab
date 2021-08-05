// Code EyesOnMe Component Here

import React from 'react'

const EyesOnMe = () => {

    onFocus = () => console.log('Good!')

    onBlur = () => console.log('Hey! Eyes on me!')

    return (
        <div>
          <button onFocus={this.onFocus} onBlur={this.onBlur}>
        Eyes on me, please!
      </button>
        </div>
    )
}

export default EyesOnMe

