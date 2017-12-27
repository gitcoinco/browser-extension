/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import Markdown from 'react-remarkable'
/* ------------------------- Internal Dependencies -------------------------- */
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
  w: 1,
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
return <Flex 
  direction={['row']}
  align='stretch'
  justify='center'
  {...props}
  key={id} 
>
<Box {...mainLayout}>
  {!imageBanner ? null : 
    <Box
      py={[40,80,220]}
      position='relative'
      of='hidden'
      w={[1]}
    >
      <BackgroundGradient gradient='ibize'/>
      { !imageBanner ? null :
        <BackgroundImage src={imageBanner} o={0.15} />}
        <Absolute left right bottom height={[450]} >
          <BackgroundGradient gradient='purpleTransparent' o={1} />
        </Absolute>
        <Container
          color='white'
          w={[500]} >
          <Link to={`/${props.entity}/${id}`} color='blue' >
            <Heading 
              level={3}
              f={[6,7]} fw={300}
              ts='light'
              children={contentTitle} 
            />
            <Heading 
              f={[4,5]} fw={700}
              level={3}
              ts='dark'
              children={contentTagline} 
            />
            <Heading 
              level={3}
              f={[5,6]} fw={700}
              mt={[15,30]}
              ts='dark'
              children={`$${price}`} 
            />
          </Link>
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
    </Box>
  }
  <Container
    bg='white'
    mt={[-110]}
    w={560}
  >
    <Image src={imageBanner}
      br={10}
      bs={2}
    />
  </Container>
  <Container p={[10]} w={600}  >

    <Box w={[1]} mt={[20,40]} bg='white' br={10} bs={2} p={[10,15,25]}>
      <Markdown source={contentBody}/> 
    </Box>
    <Box py={[20,40]} >
      <ImageList data={idx(props, _ => _.images.imageGallery)} />
    </Box>
  </Container>
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
  </Box>
</Flex>
}