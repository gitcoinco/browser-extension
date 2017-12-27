/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'

/* ------------------------- Internal Dependencies -------------------------- */
import { Flex } from 'particles'
import Foundry from 'foundry'
import StyleCompose from 'logic/interface/StyleCompose'

/* ------------------------------- Component -------------------------------- */
export default ({data, foundry, styled, styledContainer}) => {
  if(!foundry || !data) return null
  const Item = data ? _.map(data, StyleCompose(styled)) : null;
  const List = Item ? _.map(Item, Foundry[foundry]) : null
  return (
    <Flex direction={['row']} wrap='wrap' {...styledContainer} > 
      {List}
    </Flex>
  )
}