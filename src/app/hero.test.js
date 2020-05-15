import React from 'react'
import Hero from './hero'
import renderer from 'react-test-renderer'

test('renders hero', () => {
  const tree = renderer.create(<Hero />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders hero with title and brand', () => {
  const tree = renderer.create(<Hero title='bacon' brand='https://image.png' />).toJSON()
  expect(tree).toMatchSnapshot()
})
