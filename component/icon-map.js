import React from 'react'
import Check from './icons/check'
import Times from './icons/times'
import Exclamation from './icons/exclamation'
import Ban from './icons/ban'
import Question from './icons/question'
import AngleDown from './icons/angle-down'
import AngleUp from './icons/angle-up'

let Icon = ({ children }) => {
  return <i className='icon is-small'>
    {children}
  </i>
}

export default {
  pass: <Icon><Check /></Icon>,
  fail: <Icon><Times /></Icon>,
  error: <Icon><Exclamation /></Icon>,
  skip: <Icon><Ban /></Icon>,
  unknown: <Icon><Question /></Icon>,
  angleDown: <Icon><AngleDown /></Icon>,
  angleUp: <Icon><AngleDown /></Icon>
}
