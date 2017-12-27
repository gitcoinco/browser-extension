import React from 'react'
import { svg } from 'assets'
import { SVG } from 'atomic'
import Component from './Component'
export default {
  Component,
  name: 'eidenai/uport/credentials/get',
  version: '0.0.1',
  IconComponent: <SVG svg={svg.ethereum} />,
  text: 'uPort | Login',
  description: 'Login With uPort',
  handleFocus: (props, source, ref) => {
    if (!ref) {
      return
    }
    setTimeout(() => ref.focus())
  }
}
