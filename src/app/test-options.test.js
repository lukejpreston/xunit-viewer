import React from 'react'
import TestOptions from './test-options'
import renderer from 'react-test-renderer'

test('renders test options', () => {
  const tree = renderer.create(<TestOptions count={100} total={999} testCounts={{ passed: { total: 200, count: 50 } }} />).toJSON()
  expect(tree).toMatchSnapshot()
})
