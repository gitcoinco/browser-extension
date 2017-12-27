/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import Markdown from 'react-remarkable'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute} from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
import { CommerceAddToCart } from 'containers'
import {
  FormGalleryAdd,
  ImageList,
  VideoEmbed,
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
const mainLayout = {
  flex:['2 1 0'],
  bg:'white',
  bs:'1',
  br: 5,
  of:'hidden',
}

export default (props) => {
  
  /*--- Extraction ---*/
  const{ data } = props
  /*--- Extraction ---*/
  const id = idx(props, _ => _.id)
  const eid = idx(props, _ => _.eid)
  const contentTitle = idx(props, _ => _.content.contentTitle)
  const contentTagline = idx(props, _ => _.content.contentTagline)
  const price = idx(props, _ => _.price.priceDefault)
  const priceCompare = idx(props, _ => _.price.priceCompare)
  const mission = idx(props, _ => _.biography.biographyMission)
  const objective = idx(props, _ => _.biography.biographyObjective)
  const summary = idx(props, _ => _.biography.biographySummary)
  const imageBanner = idx(props, _ => _.images.imageBanner)
  
  const contentBody = idx(props, _ => _.content.contentBody)
  if (!props.eid) return null
  /*--- Component ---*/
return (
<Box {...props.styled}>
<Flex >
  <Flex w={[1,1, 0.3]} align='center' justify='center' >
    <BackgroundGradient bg='grayLight'/>
    <Image height={100} src={imageBanner}/>
  </Flex>
  <Flex 
    align='center'
    bg='white'
    p={20}
    w={[1,1, 0.7]}
  >
    <Container
      color='charcoal'
      w={[720]} >
      <Link to={`/${props.entity}/${id}`} color='blue' >
        <Heading 
          level={3}
          f={[4]} fw={300}
          color='blue'
          children={contentTitle} 
        />
        <Heading 
          f={[3]} fw={700}
          level={3}
          color='blueLight'
          children={contentTagline} 
        />
      </Link>
      {!price ? null :
      <Heading 
          level={3}
          f={[3,4]} fw={700}
          color='red'
          mt={[15]}
          children={`$${price}`} 
        />}
      </Container>
  </Flex>
</Flex>
</Box>
)
}