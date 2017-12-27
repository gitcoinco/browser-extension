/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import Markdown from 'react-remarkable'
/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute} from 'particles'
import { SpinnerSquares } from 'atomic'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

import {
  FormGalleryAdd,
  ImageList,
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
const mainLayout = {
  flex:['2 1 0'],
  bg:'white',
  bs:'1',
  br: 5,
  of:'hidden',
  pb:[30,60],
}

export default (props) => {
  /*--- Extraction ---*/
  const{ data } = props
  /*--- Extraction ---*/
  const id = idx(props, _ => _.id)
  const contentTitle = idx(props, _ => _.content.contentTitle)
  const contentTagline = idx(props, _ => _.content.contentTagline)
  const mission = idx(props, _ => _.biography.biographyMission)
  const objective = idx(props, _ => _.biography.biographyObjective)
  const summary = idx(props, _ => _.biography.biographySummary)
  const imageBanner = idx(props, _ => _.images.imageBanner)
  
  const contentBody = idx(props, _ => _.content.contentBody)
  if (!props.id) return <SpinnerSquares gradient='cherry' />
  /*--- Component ---*/
  return <Flex direction={['row']} align='stretch' justify='center' {...props} key={id} >
      <Box {...mainLayout}>
        {!imageBanner ? null : 
          <Box
            py={[40,80,220]}
            position='relative'
            of='hidden'
          >
            <BackgroundGradient gradient='ibize'/>
            { !imageBanner ? null :
              <BackgroundImage src={imageBanner} o={0.45} />}
              <Container
                color='white'
                p={20}
                position='relative'
                w={[500]}
              >
                <BackgroundGradient gradient='blue' o={0.85} />
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
                </Link>
              </Container>
              <Container w={[500]} mt={15} >
                <Link to={`/dashboard/${props.entity}/${id}`} color='blue'>
                  <Button>Administrator</Button>
                </Link>
              </Container>
          </Box>
        }
        <Container p={[10]} w={600}  >
          <Box w={[1]} mt={[null,null, '-70px']} bg='white' br={10} bs={2} p={[10,15,25]}>
            <Markdown source={contentBody}/> 
          </Box>
          <Box py={[20,40]} >
            <ImageList data={idx(props, _ => _.images.imageGallery)} />
          </Box>
        </Container>
      </Box>
    </Flex>
}