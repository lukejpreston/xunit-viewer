const path = require('path')

const getFiles = require('./get-files')

const expectedFiles = [
  path.resolve(__dirname, '../../data/class_not_classname.xml'),
  path.resolve(__dirname, '../../data/complete_no_suite.xml'),
  path.resolve(__dirname, '../../data/complete_no_suite_multi_cases.xml'),
  path.resolve(__dirname, '../../data/complete_no_suite_single_suite.xml'),
  path.resolve(__dirname, '../../data/complete_single_case_only.xml'),
  path.resolve(__dirname, '../../data/complete_single_suite.xml'),
  path.resolve(__dirname, '../../data/defect_suite.xml'),
  path.resolve(__dirname, '../../data/duplicate_name_unique_classanme.xml'),
  path.resolve(__dirname, '../../data/embedded_html_sysout.xml'),
  path.resolve(__dirname, '../../data/error_suite.xml'),
  path.resolve(__dirname, '../../data/failing_suite.xml'),
  path.resolve(__dirname, '../../data/invalid.xml'),
  path.resolve(__dirname, '../../data/issue_2.xml'),
  path.resolve(__dirname, '../../data/issue_3.xml'),
  path.resolve(__dirname, '../../data/lots-of-results.xml'),
  path.resolve(__dirname, '../../data/malformed.xml'),
  path.resolve(__dirname, '../../data/most_complex.xml'),
  path.resolve(__dirname, '../../data/multi-name-unique-classname.xml'),
  path.resolve(__dirname, '../../data/multi_cases.xml'),
  path.resolve(__dirname, '../../data/multi_error_test_with_system_out.xml'),
  path.resolve(__dirname, '../../data/multi_suite.xml'),
  path.resolve(__dirname, '../../data/name.has.dots.xml'),
  path.resolve(__dirname, '../../data/no_class_name.xml'),
  path.resolve(__dirname, '../../data/passing_suite.xml'),
  path.resolve(__dirname, '../../data/properties_in_test_meta.xml'),
  path.resolve(__dirname, '../../data/pytest_testcase_properties.xml'),
  path.resolve(__dirname, '../../data/russian-unicode.xml'),
  path.resolve(__dirname, '../../data/semi-colon.xml'),
  path.resolve(__dirname, '../../data/skipped_suite.xml'),
  path.resolve(__dirname, '../../data/special_chars_suite.xml'),
  path.resolve(__dirname, '../../data/suite-system-out.xml'),
  path.resolve(__dirname, '../../data/test-system-out.xml'),
  path.resolve(__dirname, '../../data/test.xml'),
  path.resolve(__dirname, '../../data/with_html.xml'),
  path.resolve(__dirname, '../../data/xunit-2-2.xml'),
  path.resolve(__dirname, '../../data/xunit-2.xml')
]

test('get files', () => {
  const files = getFiles({
    warning: (input) => input,
    file: (input) => input
  }, { results: path.resolve(__dirname, '../../data'), ignore: ['_thingy'] })
  expect(files.map(({ file }) => file)).toEqual(expectedFiles)
  expect(files.map(({ file }) => file)).toEqual(expect.not.arrayContaining([path.resolve(__dirname, '../../data/subfolder/_thingy.xml')]))
  expect(files.filter(({ contents }) => contents === '').length).toBe(0)
})
