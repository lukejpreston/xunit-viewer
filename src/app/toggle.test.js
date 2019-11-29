import React from 'react'
import Toggle from './toggle'
import renderer from 'react-test-renderer'

test('renders toggle', () => {
  const tree = renderer.create(<Toggle onLabel='on' offLabel='off' />).toJSON()
  expect(tree).toMatchSnapshot()
})
