import React from 'react'
import { svg } from 'assets'
import { SVG } from 'atomic'
import Component from './Component'
export default {
  Component,
  name: 'eidenai/ethereum/blockchain/block',
  version: '0.0.1',
  IconComponent: <SVG svg={svg.ethereum} />,
  text: 'Ethers | Blockchain Block',
  description: 'Request an Ethereum Block',
  handleFocus: (props, source, ref) => {
    if (!ref) {
      return
    }
    setTimeout(() => ref.focus())
  }
}
