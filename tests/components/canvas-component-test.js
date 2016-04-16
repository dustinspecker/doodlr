import '../_helper'

import
{ findRenderedDOMComponentWithTag
, renderIntoDocument
, Simulate
} from 'react-addons-test-utils'
import React from 'react'
import test from 'ava'

import CanvasComponent from '../../src/components/canvas-component'

test('should render canvas', t => {
  const component = renderIntoDocument(<CanvasComponent />)
  const canvas = findRenderedDOMComponentWithTag(component, 'canvas')

  t.truthy(canvas)
})
