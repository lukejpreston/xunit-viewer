import React from 'react'
import Files from './files'
import renderer from 'react-test-renderer'

test('renders files', () => {
  const tree = renderer.create(<Files />).toJSON()
  expect(tree).toMatchSnapshot()
})
