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
  if (!props.id) return null
  /*--- Component ---*/
return (
<Box {...props}>
<Flex >
  <Flex w={[1,1, 0.4]} align='center' justify='center' >
    <BackgroundGradient gradient='ibize'/>
    <BackgroundImage src={imageBanner} o={0.15} />}
    <Absolute left right bottom height={[450]} ><BackgroundGradient gradient='purpleTransparent' o={1} /></Absolute>
    <Image height={400} src={imageBanner}/>
  </Flex>
  <Flex 
  align='center'
  bg='white'
  p={20}
  w={[1,1, 0.6]}
  >
    <Container
          color='charcoal'
          w={[720]} >
            <Heading 
              level={3}
              f={[6,7]} fw={300}
              color='blue'
              children={contentTitle} 
            />
            <Heading 
              f={[4,5]} fw={700}
              level={3}
              color='blueLight'
              children={contentTagline} 
            />
          {!price ? null :
          <Heading 
              level={3}
              f={[5,6]} fw={700}
              color='red'
              mt={[15,30]}
              children={`$${price}`} 
            />}
          <Box>
            <Paragraph f={[1]}>
              Nulla blandit, urna ut suscipit rutrum, quam diam porttitor nulla, sed iaculis orci sapien nec velit. Quisque consectetur eleifend risus. Mauris laoreet odio sit amet tellus tempus bibendum. Fusce malesuada condimentum ligula a condimentum. Donec vel volutpat erat, in auctor diam. 
            </Paragraph>
          </Box>
          <Box mt={[20,50]} >
              <Button
                gradient='cherry'
                fs={[3,5]}
                py={[25]}
                px={[15]}
              >
                <CommerceAddToCart productId={eid} >Add To Cart</CommerceAddToCart>
              </Button>
              <Button
              gradient='crimson'
              fs={[3,5]}
              py={[25]}
              px={[15]}
              ml={[0,0,10]}>
                <CommerceAddToCart>Save To Collection</CommerceAddToCart>
              </Button>
            </Box>
          </Container>
  </Flex>
</Flex>
</Box>
)
}