import React from 'react'
import { v4 } from 'uuid'
import Remove from 'material-ui/svg-icons/content/remove'
import Component from './Component'
export default ({defaultPlugin}) => ({
  Component: Component,
  name: 'eidenai/content/section',
  version: '0.0.1',
  text: 'Section',
  description: 'Content Section',
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
  handleFocusNextHotKey: () => Promise.reject(),
  handleFocusPreviousHotKey: () => Promise.reject()
})