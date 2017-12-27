import React from 'react'
import { v4 } from 'uuid'
import Remove from 'material-ui/svg-icons/content/remove'
import Container from 'atoms/Container'

import Component from './Component'
export default ({defaultPlugin}) => ({
  Component: Component,
  name: 'eidenai/layout/container',
  version: '0.0.1',
  text: 'Container',
  description: 'Content Container',
  state: {},
  IconComponent: <Remove />,
  createInitialChildren: () => ({
    id: v4(),
    rows: [
      {
        id: v4(),
        cells: [
          {
            content: {
              plugin: defaultPlugin,
              state: defaultPlugin.createInitialState()
            },
            id: v4()
          }
        ]
      }
    ]
  }),
  handleFocus: (props, source, ref) => {
    if (!ref) {
      return
    }
    setTimeout(() => ref.focus())
  },
  handleFocusNextHotKey: () => Promise.reject(),
  handleFocusPreviousHotKey: () => Promise.reject()
})