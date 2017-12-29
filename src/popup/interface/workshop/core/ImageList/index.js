/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import {
 Flex, Box,
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'

import {
  ListStyled
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props => (
<ListStyled
  foundry={'ImageElement'}
  styled={{
      m: 10,
      container: {
        p: 10,
        h: 120,
        w: 0.2,
      }
  }}
  data={props.data}
/>)