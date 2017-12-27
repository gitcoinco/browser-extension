/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import Markdown from 'react-remarkable'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute} from 'particles'
import Container from 'atoms/Container'
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import Link from 'atoms/Link'
import BackgroundGradient from 'atoms/BackgroundGradient'
import Image from 'atoms/Image'
import { CommerceAddToCart } from 'containers'
import {
  FormGalleryAdd,
  ImageList,
  VideoEmbed,
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default (props) => {
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

/*--- Safeguard ---*/
if (!props.eid) return null

/*--- Component ---*/
return (
<Box {...props.styled}>
<Flex >
  <Flex w={[1,1, 0.2]} align='center' justify='center' >
    <BackgroundGradient bg='grayLight'/>
    <Image height={100} src={imageBanner}/>
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
  <Flex 
    align='center'
    gradient='blue'
    color='white'
    p={20}
    w={[1,1, 0.2]}
  >
    Update
  </Flex>
</Flex>
</Box>
)
}