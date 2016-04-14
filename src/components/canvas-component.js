import React from 'react'

let clientX = 0
  , clientY = 0

const onMouseMove = event => {
  const x = event.pageX
  const y = event.pageY

  console.log('x', x - clientX)
  console.log('y', y - clientY)
}

const canvas = React.createClass({
  componentDidMount() {
    // dispatch as actions later
    clientX = this.refs.canvas.getBoundingClientRect().left
    clientY = this.refs.canvas.getBoundingClientRect().top
  },
  render() {
    return <canvas ref='canvas' onMouseMove={onMouseMove}></canvas>
  }
})

export default canvas
