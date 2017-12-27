/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { v4 } from 'uuid'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import Remove from 'material-ui/svg-icons/content/remove'
import { BottomToolbar } from 'ory-editor-ui'
import TextField from 'material-ui/TextField'
/* ------------------------- Internal Dependencies -------------------------- */
import { svg } from 'assets'
import { Drawer } from 'particles'
import SVG from 'atoms/SVG'
import EditorContentLayoutDefaults from 'foundry/pluginsLayout/EditorContentLayoutDefaults'
import EditorContentLayoutBackgroundGradient from 'foundry/pluginsLayout/EditorContentLayoutBackgroundGradient'
import EditorContentLayoutBackgroundImage from 'foundry/pluginsLayout/EditorContentLayoutBackgroundImage'
import EditorContentLayoutSpacing from 'foundry/pluginsLayout/EditorContentLayoutSpacing'
import EditorContentLayoutSpacingMargin from 'foundry/pluginsLayout/EditorContentLayoutSpacingMargin'
import { 
  Flex, Box, 
  Absolute,
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'

import Display from '../Display'

const handleChange = (onChange, key) => (e, value) => onChange({ [key]: value })

export default props => 
<div>
  {
    !props.state.open ? null :
    <Drawer
      open={props.state.open}
      bs={1}
      br={'0 5px 5px 0'}
      bg='white'
      color='charcoal'
      overflow='hidden'
      p={15}
      position='left'
      z={200}
    >
    <Tabs>
      <Tab icon={<SVG svg={svg.uiComparison} svgColor="white" w={25} />}>
        <EditorContentLayoutDefaults {...props} />
      </Tab>
      <Tab icon={<SVG svg={svg.uiSpacing} svgColor="white" w={25} />}>
        <EditorContentLayoutSpacing {...props} />
        <EditorContentLayoutSpacingMargin {...props} />
      </Tab>
      <Tab icon={<SVG svg={svg.uiCamera} svgColor="white" w={25} />}>
        <EditorContentLayoutBackgroundImage {...props} />
        <EditorContentLayoutBackgroundGradient {...props} />

      </Tab>
    </Tabs>
    </Drawer>
    }
    <Display {...props}/>
</div>