/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute, Flex, Box } from 'particles'
import { BackgroundGradient, Container, Heading, Paragraph, Link, Section, SVG} from 'atomic'
import { Card, CardWrapper } from 'atomic'

import {BackgroundImage} from 'foundry'

const Content = styled(Flex)`
  position: relative;
`


const cardHeader = {
      align: 'center',
      justify: 'center',
      p: 20,
      py: [95, 145],
    }
const cardBody = {
      bg: 'blue',
      color: 'white',
      direction: ['column'],
      p: 22,
      pb: [25, 35],
    }

/* ------------------------------- Component -------------------------------- */
export default props => (
<CardWrapper direction="column" w={1} >
<Card>
  <Content {...cardHeader} >
      <BackgroundGradient z={[5]} o={[0.2]} gradient='blackTransparent' radial />
      <SVG bottom left right h="55px" svgColor='blue' svg={assets.svg.mountain} />
      <BackgroundImage image={props.image} styled={{opacity:1}} />
  </Content>
  <Content {...cardBody} >
    <Heading color="white" textShadow={[0,1]} children={props.title} />
    <Paragraph children={props.description} />
  </Content>
</Card>
</CardWrapper>
)