import React from 'react'
import Hero from './hero'
import renderer from 'react-test-renderer'

test('renders hero', () => {
  const tree = renderer.create(<Hero />).toJSON()
  expect(tree).toMatchSnapshot()
})
