import React from 'react'
import Suite from './suite'
import renderer from 'react-test-renderer'

test('renders suite', () => {
  const tree = renderer.create(<Suite
    id='suite-id'
    name='suite-name'
    properties={{
      a: 'b',
      _visible: true
    }}
    active
    time={100}
    tests={{
      testid: {
        visible: true,
        id: 'testid',
        messages: ['message 1', 'message 2'],
        status: 'passed',
        time: 888,
        name: 'Test name',
        suite: 'suite-id'
      }
    }} />).toJSON()
  expect(tree).toMatchSnapshot()
})
