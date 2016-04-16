'use strict'
import React from 'react'
import {render} from 'react-dom'
import CanvasComponent from './components/canvas-component'
import {combineReducers, createStore} from 'redux'

const x = (state = 0, action = {}) => {
  if (action.type == 'increment') {
    return state + 1
  } else if (action.type == 'decrement') {
    return state - 1
  }
  return state
}
const store = createStore(combineReducers({x}))
render(<CanvasComponent store={store}/>, document.getElementById('app'))
