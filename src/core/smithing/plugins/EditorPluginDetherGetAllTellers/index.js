import React from 'react'
import { svg } from 'assets'
import { SVG } from 'atomic'
import Component from './Component'
export default {
  Component,
  name: 'eidenai/dether/tellers-all/get',
  version: '0.0.1',
  IconComponent: <SVG svg={svg.ethereum} />,
  text: 'Dether | Get All Tellers',
  description: 'Locate active Tellers in the Market',
  handleFocus: (props, source, ref) => {
    if (!ref) {
      return
    }
    setTimeout(() => ref.focus())
  }
}
