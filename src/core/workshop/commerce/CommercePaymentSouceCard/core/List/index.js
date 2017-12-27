/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'

/* ------------------------- Internal Dependencies -------------------------- */
import { Flex } from 'particles'
import Foundry from 'foundry'
import StyleCompose from 'logic/interface/StyleCompose'

/* ------------------------------- Component -------------------------------- */
export default ({data, foundry, styled, styledItems, styledContainer, ...props}) => {
  if(!foundry || !data) return null
  const Items = data ? _.map(data, StyleCompose(styled)) : null;
  const ItemsPropped = _.map(Items, item=> ({...item, styled:{...styledItems}, ...props}))
  const List = Items ? _.map(ItemsPropped, Foundry[foundry]) : null
  return (
    <Flex direction={['row']} wrap='wrap' {...styledContainer}  > 
      {List}
    </Flex>
  )
}