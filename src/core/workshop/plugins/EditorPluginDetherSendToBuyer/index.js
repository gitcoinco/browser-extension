import React from 'react'
import { svg } from 'assets'
import { SVG } from 'atomic'
import Component from './Component'
export default {
  Component,
  name: 'eidenai/dether/buyer/send',
  version: '0.0.1',
  IconComponent: <SVG svg={svg.ethereum} />,
  text: 'Dether | Send To Buyer',
  description: 'Become ATM(automated transaction machine) ',
  handleFocus: (props, source, ref) => {
    if (!ref) {
      return
    }
    setTimeout(() => ref.focus())
  }
}
