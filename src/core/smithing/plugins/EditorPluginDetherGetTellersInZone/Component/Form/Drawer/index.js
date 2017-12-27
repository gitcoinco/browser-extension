// import idx from './idx'
import React from 'react'
import TextField from 'material-ui/TextField'
import {Tabs, Tab} from 'material-ui/Tabs';
import { svg } from 'assets'
import { Drawer } from 'particles'
import SVG from 'atoms/SVG'
import EditorContentLayoutDefaults from 'foundry/pluginsLayout/EditorContentLayoutDefaults'
import EditorContentLayoutBackgroundGradient from 'foundry/pluginsLayout/EditorContentLayoutBackgroundGradient'
import EditorContentLayoutBackgroundImage from 'foundry/pluginsLayout/EditorContentLayoutBackgroundImage'
import EditorContentLayoutSpacing from 'foundry/pluginsLayout/EditorContentLayoutSpacing'
import EditorContentLayoutSpacingMargin from 'foundry/pluginsLayout/EditorContentLayoutSpacingMargin'
import EditorContentLayoutSpacingPadding from 'foundry/pluginsLayout/EditorContentLayoutSpacingPadding' 

export default props => props.state && !props.state.open ? null :
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
    <EditorContentLayoutSpacingPadding {...props} />
  </Tab>
  <Tab icon={<SVG svg={svg.uiCamera} svgColor="white" w={25} />}>
    <EditorContentLayoutBackgroundImage {...props} />
    <EditorContentLayoutBackgroundGradient {...props} />
  </Tab>
</Tabs>
</Drawer>
