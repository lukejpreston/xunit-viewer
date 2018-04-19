import React, {PropTypes} from 'react'
import Header from './header'
import Suites from './suites'
import sockets from './sockets'

const knownStatuses = ['pass', 'fail', 'error', 'skip']

class XunitViewer extends React.Component {
  constructor (props) {
    super(props)
    let uuids = {
      suites: {},
      properties: {},
      tests: {}
    }
    props.suites.forEach(suite => {
      let suiteStatus = knownStatuses.includes(suite.status) ? suite.status : 'unknown'
      uuids.suites[suiteStatus] = uuids.suites[suiteStatus] || []
      uuids.suites[suiteStatus].push(suite._uuid)

      if (suite.properties) {
        uuids.properties.properties = uuids.properties.properties || []
        uuids.properties.properties.push(suite.properties._uuid)
      }

      if (suite.tests) {
        suite.tests.forEach(test => {
          test.raw = test.message
          let testStatus = knownStatuses.includes(test.status) ? test.status : 'unknown'
          uuids.tests[testStatus] = uuids.tests[testStatus] || []
          uuids.tests[testStatus].push(test._uuid)
        })
      }
    })

    this.state = {
      title: props.title,
      suites: props.suites,
      uuids,
      header: {
        active: true,
        statsStatus: {}
      },
      search: {
        suites: '',
        tests: '',
        properties: ''
      },
      collapsed: {
        suites: {},
        tests: {},
        properties: {}
      },
      hidden: {
        suites: {},
        tests: {},
        properties: {}
      }
    }
  }
  componentDidMount () {
    sockets((suites) => {
      let uuids = {
        suites: {},
        properties: {},
        tests: {}
      }
      suites.forEach(suite => {
        let suiteStatus = knownStatuses.includes(suite.status) ? suite.status : 'unknown'
        uuids.suites[suiteStatus] = uuids.suites[suiteStatus] || []
        uuids.suites[suiteStatus].push(suite._uuid)

        if (suite.properties) {
          uuids.properties.properties = uuids.properties.properties || []
          uuids.properties.properties.push(suite.properties._uuid)
        }

        if (suite.tests) {
          suite.tests.forEach(test => {
            let testStatus = knownStatuses.includes(test.status) ? test.status : 'unknown'
            uuids.tests[testStatus] = uuids.tests[testStatus] || []
            uuids.tests[testStatus].push(test._uuid)
          })
        }
      })
      this.setState({suites, uuids})
    })
  }
  render () {
    return <div>
      <Header
        title={this.state.title}
        suites={this.state.suites}
        search={this.state.search}
        onSearch={(value, type) => {
          let search = this.state.search
          search[type] = value
          this.setState({search})
        }}
        onToggle={() => {
          let header = this.state.header
          header.active = !header.active
          this.setState({header})
        }}
        onStatToggle={({name, type}) => {
          name = name.toLowerCase()
          let statsStatus = this.state.header.statsStatus
          statsStatus[name] = statsStatus[name] || {}
          if (statsStatus[name][type]) delete statsStatus[name][type]
          else statsStatus[name][type] = true
          this.setState({
            header: {
              active: this.state.header.active,
              statsStatus
            }
          })
        }}
        onExpand={({name, type}) => {
          name = name.toLowerCase()

          let collapsed = this.state.collapsed

          if (name === type) {
            Object.keys(this.state.uuids[name]).forEach(key => {
              let uuids = this.state.uuids[name][key]
              uuids.forEach(uuid => {
                if (collapsed[type][uuid]) delete collapsed[type][uuid]
              })
            })
          } else {
            let uuids = this.state.uuids[name][type]
            uuids.forEach(uuid => {
              if (collapsed[name][uuid]) delete collapsed[name][uuid]
            })
          }

          this.setState({collapsed})
        }}
        onCollapse={({name, type}) => {
          name = name.toLowerCase()
          let collapsed = this.state.collapsed

          if (name === type) {
            Object.keys(this.state.uuids[name]).forEach(key => {
              let uuids = this.state.uuids[name][key]
              uuids.forEach(uuid => {
                collapsed[type][uuid] = true
              })
            })
          } else {
            let uuids = this.state.uuids[name][type]
            uuids.forEach(uuid => {
              collapsed[name][uuid] = true
            })
          }
          this.setState({collapsed})
        }}
        onShow={({name, type}) => {
          name = name.toLowerCase()

          let hidden = this.state.hidden

          if (name === type) {
            Object.keys(this.state.uuids[name]).forEach(key => {
              let uuids = this.state.uuids[name][key]
              uuids.forEach(uuid => {
                if (hidden[type][uuid]) delete hidden[type][uuid]
              })
            })
          } else {
            let uuids = this.state.uuids[name][type]
            uuids.forEach(uuid => {
              if (hidden[name][uuid]) delete hidden[name][uuid]
            })
          }

          this.setState({hidden})
        }}
        onHide={({name, type}) => {
          name = name.toLowerCase()
          let hidden = this.state.hidden

          if (name === type) {
            Object.keys(this.state.uuids[name]).forEach(key => {
              let uuids = this.state.uuids[name][key]
              uuids.forEach(uuid => {
                hidden[type][uuid] = true
              })
            })
          } else {
            let uuids = this.state.uuids[name][type]
            uuids.forEach(uuid => {
              hidden[name][uuid] = true
            })
          }
          this.setState({hidden})
        }}
        isActive={this.state.header.active}
        statsStatus={this.state.header.statsStatus}
      />
      <Suites
        suites={this.state.suites}
        search={this.state.search}
        hidden={this.state.hidden}
        collapsed={this.state.collapsed}
        onToggle={({type, uuid}) => {
          let collapsed = this.state.collapsed
          if (collapsed[type][uuid]) delete collapsed[type][uuid]
          else collapsed[type][uuid] = true
          this.setState({collapsed})
        }}
        onToggleRaw={({uuid}) => {
          this.state.suites.forEach(suite => {
            if (suite.tests) {
              suite.tests.forEach(test => {
                if (test._uuid === uuid) {
                  if (test.raw) {
                    test.raw = null
                  } else {
                    test.raw = test.message
                  }
                }
              })
            }
          })
          this.setState({suites: this.state.suites})
        }}
      />
    </div>
  }
}

XunitViewer.propTypes = {
  title: PropTypes.string,
  suites: PropTypes.array
}

export default XunitViewer
if (typeof window !== 'undefined') window.XunitViewer = XunitViewer
