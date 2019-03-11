import React from 'react'
import Options from './options'
import renderer from 'react-test-renderer'

test('renders options', () => {
  const tree = renderer.create(<Options
    label='Suites'
    count={52}
    total={100}
    passed={12}
    failed={12}
    warning={12}
    skip={12}
    unknown={12}
  />).toJSON()
  expect(tree).toMatchSnapshot()
})
