/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import Popover from 'react-popover'
/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute, Flex, Box } from 'particles'
import {Heading, Image, Paragraph, Container, Section} from 'atomic'
/* --------------------------- Styled Components ---------------------------- */
import Item from 'workshop/core/Item'
/* ------------------------------- Component -------------------------------- */
export default (props) =>(
    <Popover
    isOpen={props.isOpen}
    place={props.place || 'below'}
    preferPlace={props.preferPlace || 'below'}
    body={
      !props.body 
      ? <Item foundry={props.foundry}/> 
      : (typeof props.body === 'function')
        ? React.createElement(props.body)
        : React.cloneElement(props.body)
    }
    tipSize={0.1}
    onOuterAction={() =>{props.togglePopover(n => n = n ? false : true); props.popoverClose()}  }
  >
    <div onClick={() => {props.togglePopover(n => n = n ? false : true); props.popoverOpen()}}>
    {props.children}
    </div>
  </Popover>
)