import React from 'react'
import Options from './options'
import renderer from 'react-test-renderer'

test('renders options', () => {
  const props = {
    key: 'suites',
    label: 'Suites',
    active: false,
    count: 100,
    total: 100,
    counts: [{
      key: 'passed',
      type: 'passed',
      total: 10
    }],
    toggles: [{
      key: 'all',
      label: 'all',
      visible: true,
      expanded: true,
      raw: true
    }]
  }

  const tree = renderer.create(<Options {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
