import React from 'react'
import SuiteOptions from './suite-options'
import renderer from 'react-test-renderer'

test('renders suite options', () => {
  const tree = renderer.create(<SuiteOptions count={100} total={999} />).toJSON()
  expect(tree).toMatchSnapshot()
})
