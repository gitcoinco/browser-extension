/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import HorizontalRule from 'atoms/HorizontalRule'
import Absolute from 'atoms/Absolute'
import Container from 'atoms/Container'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import List from 'atoms/List'
/* ---------------------------- Module Package ------------------------------ */
export default props => !props.data ? null :
<Box bs={0} br={10} p={[15,25]} >
  <Heading level={[3]} f={[3]} color='blue' >
    {idx(props, _=>_.data.address)}
  </Heading>
</Box>