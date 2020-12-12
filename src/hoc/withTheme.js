import React from 'react'

function withTheme(WrappedComponent, mode) {

  const darkModeStyle = {
    background: 'black',
    color: 'white'
  }

  const lightModeStyle = {
    background: 'white',
    color: 'black'
  }

  const styleToApply = (mode === 'dark') ? darkModeStyle : lightModeStyle


  return function (props) {
    return( <WrappedComponent {...props} style={styleToApply} />)
  }
}

export default withTheme