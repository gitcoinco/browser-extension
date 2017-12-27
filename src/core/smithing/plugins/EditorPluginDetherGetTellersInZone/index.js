import React from 'react'
import { svg } from 'assets'
import { SVG } from 'atomic'
import Component from './Component'
export default {
  Component,
  name: 'eidenai/dether/zone/get/tellers',
  version: '0.0.1',
  IconComponent: <SVG svg={svg.ethereum} />,
  text: 'Dether | Get Tellers In Zone',
  description: 'Request Tellers in a specific Zone',
  handleFocus: (props, source, ref) => {
    if (!ref) {
      return
    }
    setTimeout(() => ref.focus())
  }
}
