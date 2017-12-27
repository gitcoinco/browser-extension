import React from 'react'
import { svg } from 'assets'
import { SVG } from 'atomic'
import Component from './Component'
export default {
  Component,
  name: 'eidenai/dether/sell-point/add',
  version: '0.0.1',
  IconComponent: <SVG svg={svg.ethereum} />,
  text: 'Dether | Add Sell Point',
  description: 'Become ATM(automated transaction machine) ',
  handleFocus: (props, source, ref) => {
    if (!ref) {
      return
    }
    setTimeout(() => ref.focus())
  }
}
