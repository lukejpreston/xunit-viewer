const path = require('path')

const getFiles = require('./get-files')
const getSuites = require('./get-suites')

const expected = {
  suites: {
    390294658: {
      tests: {
        '-1319400288': {
          id: -1319400288,
          name: 'testsuite in a testcase testcase',
          messages: [],
          visible: true,
          time: 0,
          status: 'passed'
        }
      },
      properties: {
        _visible: true
      },
      id: 390294658,
      name: 'testsuite in a testcase',
      time: 0
    },
    953020670: {
      tests: {
        406265962: {
          id: 406265962,
          name: 'the fifth test',
          messages: [],
          visible: true,
          time: '0.002',
          status: 'passed'
        },
        1155740465: {
          id: 1155740465,
          name: 'the sixt test',
          messages: [],
          visible: true,
          time: '0.001',
          status: 'passed'
        },
        '-698800367': {
          id: -698800367,
          name: 'the first test',
          messages: [],
          visible: true,
          time: '0.001',
          status: 'passed'
        },
        '-1782127729': {
          id: -1782127729,
          name: 'the second test',
          messages: [],
          visible: true,
          time: '0.001',
          status: 'passed'
        },
        '-1493528902': {
          id: -1493528902,
          name: 'the third test',
          messages: [],
          visible: true,
          time: '0.012',
          status: 'passed'
        },
        '-1476174975': {
          id: -1476174975,
          name: 'the fouth test',
          messages: [],
          visible: true,
          time: '0.001',
          status: 'passed'
        }
      },
      properties: {
        _visible: true,
        'flag-type': ['bug', 'bug'],
        'flag-content': ['APPLICATION DEFECT', 'APPLICATION DEFECT'],
        'Has a name': ['true', 'true'],
        URL: ['/test/data.com', '/test/data.com']
      },
      id: 953020670,
      name: 'SUITE ONE',
      time: '0.021'
    },
    953025764: {
      tests: {
        406265962: {
          id: 406265962,
          name: 'the fifth test',
          messages: [],
          visible: true,
          time: '0.002',
          status: 'passed'
        },
        1155740465: {
          id: 1155740465,
          name: 'the sixt test',
          messages: [],
          visible: true,
          time: '0.001',
          status: 'passed'
        },
        '-698800367': {
          id: -698800367,
          name: 'the first test',
          messages: [],
          visible: true,
          time: '0.001',
          status: 'passed'
        },
        '-1782127729': {
          id: -1782127729,
          name: 'the second test',
          messages: [],
          visible: true,
          time: '0.001',
          status: 'passed'
        },
        '-1493528902': {
          id: -1493528902,
          name: 'the third test',
          messages: [],
          visible: true,
          time: '0.012',
          status: 'passed'
        },
        '-1476174975': {
          id: -1476174975,
          name: 'the fouth test',
          messages: [],
          visible: true,
          time: '0.001',
          status: 'passed'
        }
      },
      properties: {
        _visible: true
      },
      id: 953025764,
      name: 'SUITE TWO',
      time: '0.021'
    },
    1090594823: {
      tests: {
        1566902959: {
          id: 1566902959,
          name: 'testName_1',
          messages: [],
          visible: true,
          time: '2.079',
          status: 'passed'
        },
        1566902960: {
          id: 1566902960,
          name: 'testName_2',
          messages: [],
          visible: true,
          time: '1.399',
          status: 'passed'
        }
      },
      properties: {
        _visible: true,
        specId: ['8bd15b60c2e4427bebe70fb618a717f4'],
        suiteName: ['@release'],
        capabilities: ['phantomjs']
      },
      id: 1090594823,
      name: 'release',
      time: '3.478'
    },
    1117832292: {
      tests: {},
      properties: {
        _visible: true,
        specId: ['8bd15b60c2e4427bebe70fb618a717f4'],
        suiteName: ['Create Action'],
        capabilities: ['phantomjs']
      },
      id: 1117832292,
      name: 'Issue 3 suite',
      time: '3.478'
    },
    1201687819: {
      tests: {
        '-2126675373': {
          id: -2126675373,
          name: 'testcase 1',
          messages: [],
          visible: true,
          time: 0,
          status: 'passed'
        },
        '-2126675372': {
          id: -2126675372,
          name: 'testcase 2',
          messages: [],
          visible: true,
          time: 0,
          status: 'passed'
        }
      },
      properties: {
        _visible: true
      },
      id: 1201687819,
      name: 'duplicate',
      time: 0
    },
    2038162744: {
      tests: {
        '-1785369981': {
          id: -1785369981,
          name: 'Then the file is uploaded successfully',
          messages: ['java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat com.germaniumhq.germanium.steps.GermaniumFunctionSelectFile.the_file_is_uploaded_successfully(GermaniumFunctionSelectFile.java:26)\n\tat ✽.Then the file is uploaded successfully(features/features/germanium-function-select_file.feature:7)', 'java.lang.AssertionError'],
          visible: true,
          time: '0.004',
          status: 'failure'
        }
      },
      properties: {
        _visible: true
      },
      id: 2038162744,
      name: 'CucumberTest',
      time: '0.069'
    },
    2100746923: {
      tests: {
        2059881703: {
          id: 2059881703,
          name: 'issue 2 test',
          messages: ['0x1 != 0\n./failed_file_name.c:467: error: Failure!'],
          visible: true,
          time: '0.155',
          status: 'failure'
        }
      },
      properties: {
        _visible: true
      },
      id: 2100746923,
      name: 'issue 2',
      time: '0.0160106'
    },
    '-1035817293': {
      tests: {
        '-1238486695': {
          id: -1238486695,
          name: 'test name',
          messages: ['inner massage', 'message', 'type', 'inner massage', 'message', 'type', 'inner massage', 'message', 'type', 'inner massage', 'message', 'type', 'inner message', 'inner massage', 'message', 'type', 'inner massage', 'message', 'type', 'message', 'type', 'message', 'type', 'inner massage', 'message', 'type', 'inner massage', 'message', 'type'],
          visible: true,
          time: '0.001',
          status: 'error'
        },
        '-579348086': {
          id: -579348086,
          name: 'No Name',
          messages: ['inner message', '<i>inner</i><b>message</b>', '<b>message</b>', '<i>type</i>'],
          visible: true,
          time: 0,
          status: 'failure'
        }
      },
      properties: {
        _visible: true,
        x: ['y'],
        a: ['b'],
        c: ['d', 'd']
      },
      id: -1035817293,
      name: 'suite name',
      time: '0.021'
    },
    '-579348086': {
      tests: {
        82310513: {
          id: 82310513,
          name: 'has html',
          messages: ['<i>ARGG</i><b>BOO</b>', '<b>BOO</b>', '<i>ARGH</i>'],
          visible: true,
          time: '0.00075',
          status: 'error'
        },
        276396651: {
          id: 276396651,
          name: 'Is An Error',
          messages: ['java.lang.RuntimeException: There was an error', 'There was a error', 'java.lang.RuntimeException', 'java.lang.RuntimeException: There was an error', 'There was a error', 'java.lang.RuntimeException'],
          visible: true,
          time: '0.00075',
          status: 'error'
        },
        704554474: {
          id: 704554474,
          name: 'It Is A Failure',
          messages: ['FILENAME:XX\nExpected\n    <string>: Luke\nto equal\n    <string>: luke', 'Failure'],
          visible: true,
          time: '0.012011200000000001',
          status: 'failure'
        },
        834489265: {
          id: 834489265,
          name: 'It Is A Pass',
          messages: [],
          visible: true,
          time: '0.000625',
          status: 'passed'
        },
        1065278511: {
          id: 1065278511,
          name: 'It Is Skipped',
          messages: [],
          visible: true,
          time: '0',
          status: 'skipped'
        }
      },
      properties: {
        _visible: true,
        'flag-type': ['bug'],
        'flag-content': ['APPLICATION DEFECT'],
        'Has a name': ['true'],
        URL: ['/hunter/overall_test.go'],
        even: ['more']
      },
      id: -579348086,
      name: 'No Name',
      time: '0.0160106'
    },
    '-1929456795': {
      tests: {},
      properties: {
        _visible: true,
        specId: ['ae110df54f3ea0a8d820bb5e057844d6'],
        suiteName: ['View listings page'],
        capabilities: ['chrome'],
        file: ['./test/features/main.feature']
      },
      id: -1929456795,
      name: 'view listings page',
      time: '0.02'
    },
    '-68285290': {
      tests: {
        104219158: {
          id: 104219158,
          name: 'i logged into an application',
          messages: [],
          visible: true,
          time: '0.348',
          status: 'passed'
        },
        926961572: {
          id: 926961572,
          name: 'i navigate to the listings page',
          messages: [],
          visible: true,
          time: '0.343',
          status: 'passed'
        },
        '-1597401884': {
          id: -1597401884,
          name: 'i can see tabular list of records',
          messages: [],
          visible: true,
          time: '0.34',
          status: 'passed'
        }
      },
      properties: {
        _visible: true,
        specId: ['ae110df54f3ea0a8d820bb5e057844d6'],
        suiteName: ['@release2017.1.0,, @MCC272151_10: Display list of records'],
        capabilities: ['chrome'],
        file: ['./test/features/main.feature']
      },
      id: -68285290,
      name: '@release2017.1.0,, @mcc272151_10: display list of records',
      time: '0.017'
    },
    '-1861124855': {
      tests: {
        152530127: {
          id: 152530127,
          name: 'simple passing test',
          messages: [],
          visible: true,
          time: 0,
          status: 'passed'
        },
        448559065: {
          id: 448559065,
          name: 'test with time',
          messages: [],
          visible: true,
          time: 'time',
          status: 'passed'
        },
        1350225396: {
          id: 1350225396,
          name: 'failing test with messages',
          messages: ['inner massage 1', 'message prop 1', 'inner massage 2', 'message prop 2'],
          visible: true,
          time: 0,
          status: 'failure'
        },
        1443479640: {
          id: 1443479640,
          name: 'test with messages',
          messages: ['inner message', 'message prop'],
          visible: true,
          time: 0,
          status: 'passed'
        },
        1669557569: {
          id: 1669557569,
          name: 'the sub test',
          messages: [],
          visible: true,
          time: 0,
          status: 'passed'
        },
        1879989598: {
          id: 1879989598,
          name: 'erroring test with messages',
          messages: ['inner massage 1', 'message prop 1', 'inner massage 2', 'message prop 2'],
          visible: true,
          time: 0,
          status: 'error'
        },
        2045602436: {
          id: 2045602436,
          name: 'test passed with messages',
          messages: ['inner massage 1', 'message prop 1', 'inner massage 2', 'message prop 2'],
          visible: true,
          time: 0,
          status: 'passed'
        },
        '-579348086': {
          id: -579348086,
          name: 'No Name',
          messages: ['only a message'],
          visible: true,
          time: 0
        },
        '-232186498': {
          id: -232186498,
          name: 'test with sub test',
          messages: [],
          visible: true,
          time: 0,
          status: 'passed'
        },
        '-986143044': {
          id: -986143044,
          name: 'test passed with messages and free text',
          messages: ['HERE IS SOME TEXT', 'inner massage 1', 'message prop 1'],
          visible: true,
          time: 0,
          status: 'passed'
        },
        '-1154650731': {
          id: -1154650731,
          name: 'skiping test with messages',
          messages: ['inner massage 1', 'message prop 1', 'inner massage 2', 'message prop 2'],
          visible: true,
          time: 0,
          status: 'skipped'
        },
        '-198845521': {
          id: -198845521,
          name: 'error and failure test with messages',
          messages: ['error inner massage 1', 'error message prop 1'],
          visible: true,
          time: 0,
          status: 'error'
        }
      },
      properties: {
        _visible: true,
        'name only': [],
        'prop 1': ['value 1', 'value 2'],
        'prop 2': ['value'],
        'No Name': ['value with no name', 'value only'],
        'seperate props': ['value']
      },
      id: -1861124855,
      name: 'suite 1',
      time: 'time'
    },
    '-1861124854': {
      tests: {
        '-1146345790': {
          id: -1146345790,
          name: 'testcase',
          messages: [],
          visible: true,
          time: 0,
          status: 'passed'
        }
      },
      properties: {
        _visible: true
      },
      id: -1861124854,
      name: 'suite 2',
      time: 0
    },
    '-1028948070': {
      tests: {
        '-1387098835': {
          id: -1387098835,
          name: 'testcase duplicate',
          messages: ['message 1', 'message 2'],
          visible: true,
          time: 0,
          status: 'passed'
        }
      },
      properties: {
        _visible: true
      },
      id: -1028948070,
      name: 'suite with duplicate tests',
      time: 0
    }
  }
}

const logger = {
  warning: input => input,
  file: input => input,
  error: input => input
}

test('get suites', async () => {
  const files = getFiles(logger, { results: path.resolve(__dirname, '../../data') })
  const suites = await getSuites(logger, files)
  expect(expected).toEqual(suites)
})
