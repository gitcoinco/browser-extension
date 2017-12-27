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
<div>
<Flex height={['100vh']} >
  <Flex w={[1,1, 0.4]} align='center' justify='center' >
    <BackgroundGradient gradient='ibize'/>
    <BackgroundImage src={imageBanner} o={0.15} />}
    <Absolute left right bottom height={[450]} ><BackgroundGradient gradient='purpleTransparent' o={1} /></Absolute>
    <Image height={400} src={imageBanner}/>
    <Shape top bottom right height={[1]} svg={assets.svg.anglesVertical} w={[100]} z={0} />
  </Flex>
  <Flex w={[1,1, 0.6]} align='center' >
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
          <Box>
            <Paragraph f={[1]}>
              Nulla blandit, urna ut suscipit rutrum, quam diam porttitor nulla, sed iaculis orci sapien nec velit. Quisque consectetur eleifend risus. Mauris laoreet odio sit amet tellus tempus bibendum. Fusce malesuada condimentum ligula a condimentum. Donec vel volutpat erat, in auctor diam. 
            </Paragraph>
            <Flex mt={[15,30]}>
              <Box w={[1,1,0.5]} >
                <SVG svg={assets.svg.bell} svgColor='blue' height={35} w={35}/>
                <Paragraph f={[1]}>
                  Nulla blandit, urna ut suscipit rutrum, quam diam porttitor nulla, sed iaculis orci sapien nec velit. Quisque consectetur eleifend risus.
                </Paragraph>
              </Box>
              <Box w={[1,1,0.5]} >
                <SVG svg={assets.svg.dna} svgColor='blue' height={35} w={35}/>
                <Paragraph f={[1]}>
                  Nulla blandit, urna ut suscipit rutrum, quam diam porttitor nulla, sed iaculis orci sapien nec velit. Quisque consectetur eleifend risus. 
                </Paragraph>
              </Box>
            </Flex>
          </Box>
          <Heading 
              level={3}
              f={[5,6]} fw={700}
              mt={[15,30]}
              children={`$${price}`} 
            />
          <Box mt={[20,50]} >
              <Button
                gradient='cherry'
                fs={[3,5]}
                py={[25]}
                px={[15]}
              >
                Add To Cart
              </Button>
              <Button
              gradient='crimson'
              fs={[3,5]}
              py={[25]}
              px={[15]}
              ml={[0,0,10]}>
                Save To Collection
              </Button>
            </Box>
          </Container>
  </Flex>
</Flex>
<Flex mh={['100vh']} >
  <Flex w={[1,1, 0.6]} align='center' >
    <Container
      color='charcoal'
      w={[720]} >
      <Box w={[1]} mt={[20,40]} bg='white' br={10} bs={0} p={[10,15,25]}>
        <Markdown source={contentBody}/> 
      </Box>
    </Container>
  </Flex>
  <Flex w={[1,1, 0.4]} align='center' justify='center' >
    <BackgroundGradient gradient='ibize' gradientDir='180deg' />
    <BackgroundImage src={imageBanner} o={0.15} />}
    <Absolute left right bottom height={[450]} ><BackgroundGradient gradient='purpleTransparent' o={1} /></Absolute>
    <ImageList data={idx(props, _ => _.images.imageGallery)} />
  </Flex>
</Flex>
  {!idx(props, _ => _.metadata.metadataVideo) ? null : 
  <Section
    color='white'
    gradient='cherry'
    py={[100,250]}
  >
    <Container w={[720]} >
      <Heading level={[3]} f={[6,7]} ts='purpleDark'>
        <Span fw='300'>
          Real People</Span><br/>
          Real Insights.
      </Heading>
      <Box z={10}><VideoEmbed url={idx(props, _ => _.metadata.metadataVideo)}/></Box>
      <Paragraph f={[1]}>
        Nulla blandit, urna ut suscipit rutrum, quam diam porttitor nulla, sed iaculis orci sapien nec velit. Quisque consectetur eleifend risus. Mauris laoreet odio sit amet tellus tempus bibendum. Fusce malesuada condimentum ligula a condimentum. Donec vel volutpat erat, in auctor diam. 
      </Paragraph>
    </Container>
  </Section>
  }
</div>
)
}