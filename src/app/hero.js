import React from 'react'
import Logo from './logo.js'

const FilterIcon = () => <i className='fas fa-filter' />
const BoltLightningIcon = () => <i className='fa-solid fa-bolt-lightning' />
const PrintIcon = () => <i className='fa-solid fa-print' />
const HeartIcon = () => <i className='fas fa-heart' />
const HeartCheckIcon = () => <i className='fa-solid fa-circle-check'></i>
const HeartExclamationIcon = () => <i className='fa-solid fa-triangle-exclamation'></i>
const PassedIcon = () => <i className='pr-1 fas fa-check' />
const FailureIcon = () => <i className='pr-1 fas fa-times' />
const ErrorIcon = () => <i className='pr-1 fas fa-exclamation' />
const SkippedIcon = () => <i className='pr-1 fas fa-ban' />
const UnknownIcon = () => <i className='pr-1 fas fa-question' />

const FastFilter = ({ dropdown, fastFilter, dispatch }) => (
  <div className={`navbar-item dropdown is-${dropdown ? 'active' : 'inactive'}`}>
    <div className='dropdown-trigger'>
      <button
        onClick={() => dispatch({ type: 'hero-dropdown' })}
        className='filter button has-text-white'
        aria-haspopup='true'
        aria-controls='dropdown-menu'
      >
        {fastFilter === 0 && <span><HeartExclamationIcon /> ERROR/FAILURE/UNKNOWN</span>}
        {fastFilter === 1 && <span><HeartCheckIcon /> PASSED/SKIPPED</span>}
        {fastFilter === 2 && <span><HeartIcon /> ALL</span>}
        {fastFilter === 3 && <span><FilterIcon /> FILTERED</span>}
        <span className='icon is-small'>
          <i className='fas fa-angle-down' aria-hidden='true'></i>
        </span>
      </button>
    </div>
    <div className='dropdown-menu' role='menu'>
      <div className='dropdown-content'>
        <a
          className={`dropdown-item is-${fastFilter === 0 ? 'active' : 'inactive'}`}
          onClick={() => { dispatch({ type: 'hero-fast-filter', payload: { fastFilter: 0 } }) }}
        >
          <HeartExclamationIcon /> ERROR/FAILURE/UNKNOWN
        </a>
        <a
          className={`dropdown-item is-${fastFilter === 1 ? 'active' : 'inactive'}`}
          onClick={() => { dispatch({ type: 'hero-fast-filter', payload: { fastFilter: 1 } }) }}
        >
          <HeartCheckIcon /> PASSED/SKIPPED
        </a>
        <a
          className={`dropdown-item is-${fastFilter === 2 ? 'active' : 'inactive'}`}
          onClick={() => { dispatch({ type: 'hero-fast-filter', payload: { fastFilter: 2 } }) }}
        >
          <HeartIcon /> ALL
        </a>
        <a
          className={`dropdown-item is-${fastFilter === 3 ? 'active' : 'inactive'} is-disabled`}
          onClick={() => { }}
        >
          <FilterIcon /> FILTERED
        </a>
      </div>
    </div>
  </div>
)

const Hero = ({
  active,
  onFilterClick,
  title,
  brand,
  printMode,
  fastFilter,
  burger,
  dropdown,
  dispatch,
  suites
}) => {
  const totalSuites = Object.values(suites).length
  const visibleSuiteCount = Object.values(suites).filter(({ _visible }) => _visible).length

  let propertiesTotal = 0
  let visiblePropertyCount = 0
  Object.entries(suites).forEach(([key, suite]) => {
    const found = Object.keys(suite.properties).filter(key => key !== '_active' && key !== '_visible').length
    propertiesTotal += found
    if (suite._visible) visiblePropertyCount += found
    Object.values(suite.tests).forEach(test => {
      if (test.properties) {
        const found = Object.keys(test.properties).filter(key => key !== '_active' && key !== '_visible').length
        propertiesTotal += found
        if (test.visible) visiblePropertyCount += found
      }
    })
  })

  const testCounts = {
    total: { passed: 0, error: 0, failure: 0, skipped: 0, unknown: 0 },
    visible: { passed: 0, error: 0, failure: 0, skipped: 0, unknown: 0 }
  }
  Object.values(suites).forEach(({ tests }) => {
    Object.values(tests).forEach(test => {
      testCounts.total[test.status] += 1
      if (test.visible) {
        testCounts.visible[test.status] += 1
      }
    })
  })

  return <section className='hero is-black'>
    <div className='hero-head'>
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-brand'>
            <div className='navbar-item'>
              {
                brand !== null
                  ? <img className='brand' alt={title} src={brand} />
                  : <Logo />
              }
            </div>
            <div className='navbar-item p-0'>
              <table className='table is-narrow is-size-7'>
                <tbody>
                  <tr>
                    <td className='has-text-right'>TESTS</td>
                    {testCounts.total.passed > 0 && <td><PassedIcon />{testCounts.visible.passed} / <b>{testCounts.total.passed}</b></td>}
                    {testCounts.total.failure > 0 && <td><FailureIcon />{testCounts.visible.failure} / <b>{testCounts.total.failure}</b></td> }
                    {testCounts.total.error > 0 && <td><ErrorIcon />{testCounts.visible.error} / <b>{testCounts.total.error}</b></td> }
                    {testCounts.total.skipped > 0 && <td><SkippedIcon />{testCounts.visible.skipped} / <b>{testCounts.total.skipped}</b></td> }
                    {testCounts.total.unknown > 0 && <td><UnknownIcon />{testCounts.visible.unknown} / <b>{testCounts.total.unknown}</b></td> }
                  </tr>
                  <tr>
                    <td className='has-text-right'>SUITES</td>
                    <td>{visibleSuiteCount} / <b>{totalSuites}</b></td>
                  </tr>
                  <tr>
                    <td className='has-text-right'>PROPERTIES</td>
                    <td>{visiblePropertyCount} / <b>{propertiesTotal}</b></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span
              className={`navbar-burger is-${burger ? 'active' : 'inactive'}`}
              onClick={() => { dispatch({ type: 'hero-burger' }) }}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className={`navbar-menu is-${burger ? 'active' : 'inactive'}`}>
            <div className='navbar-end'>
              <FastFilter fastFilter={fastFilter} dropdown={dropdown} dispatch={dispatch} />
              <button className='navbar-item filter button has-text-white' onClick={onFilterClick}>
                <span><FilterIcon /> {!active ? 'FILTER' : 'CLOSE'}</span>
              </button>
              <button className='navbar-item filter button has-text-white' onClick={() => { dispatch({ type: 'hero-print-mode' }) }}>
                {printMode && <span><PrintIcon /> PRINT MODE</span>}
                {!printMode && (<span><BoltLightningIcon /> FAST MODE</span>)}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div >
  </section >
}

export default Hero
