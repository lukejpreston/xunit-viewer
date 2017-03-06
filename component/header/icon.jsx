import React from 'react'

let Icon = () => {
  return <svg
    className='icon is-large'
    width='64'
    height='64'
    viewBox='0 0 64 64'
    xmlns='http://www.w3.org/2000/svg'>
    <rect
      className='background'
      x='0'
      y='0'
      width='64'
      height='64'
      fill='#2C3E50'
    />
    <line
      className='border border-left'
      x1='0'
      y1='1'
      x2='64'
      y2='1'
      strokeWidth='3'
      stroke='#23D160'
    />
    <line
      className='border border-top'
      x1='1'
      y1='0'
      x2='1'
      y2='64'
      strokeWidth='3'
      stroke='#23D160'
    />
    <line
      className='border border-right'
      x1='63'
      y1='0'
      x2='63'
      y2='64'
      strokeWidth='3'
      stroke='#E74C3C'
    />
    <line
      className='border border-bottom'
      x1='0'
      y1='63'
      x2='64'
      y2='63'
      strokeWidth='3'
      stroke='#E74C3C'
    />
    <text
      className='char char-x'
      x='7'
      y='45'
      fontFamily='Helvetica'
      fontSize='36'
      stroke='#23D160'
      fill='#23D160'>
    X
    </text>
    <text
      className='char char-v'
      x='33'
      y='45'
      fontFamily='Helvetica'
      fontSize='36'
      stroke='#E74C3C'
      fill='#E74C3C'>
    V
    </text>
  </svg>
}

export default Icon
