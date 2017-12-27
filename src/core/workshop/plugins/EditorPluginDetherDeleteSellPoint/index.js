import React from 'react'
import { svg } from 'assets'
import { SVG } from 'atomic'
import Component from './Component'
export default {
  Component,
  name: 'eidenai/dether/sell-point/delete',
  version: '0.0.1',
  IconComponent: <SVG svg={svg.ethereum} />,
  text: 'Dether | Delete Sell Point',
  description: 'Remove Sell point from Market',
  handleFocus: (props, source, ref) => {
    if (!ref) {
      return
    }
    setTimeout(() => ref.focus())
  }
}
