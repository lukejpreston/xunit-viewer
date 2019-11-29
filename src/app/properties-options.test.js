import React from 'react'
import PropertiesOptions from './properties-options'
import renderer from 'react-test-renderer'

test('renders properties options', () => {
  const tree = renderer.create(<PropertiesOptions count={100} total={999} />).toJSON()
  expect(tree).toMatchSnapshot()
})
