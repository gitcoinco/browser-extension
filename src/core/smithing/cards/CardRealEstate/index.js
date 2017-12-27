/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import idx from './idx';
import {images } from 'assets'
/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute} from 'particles'
import BackgroundImage from 'atoms/BackgroundImage'
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import Link from 'atoms/Link'
import Image from 'atoms/Image'
import HorizontalRule from 'atoms/HorizontalRule'
/* ------------------------------- Component -------------------------------- */
const mainLayout = {
  flex:['2 1 0'],
  bg:'white',
  bs:'0',
  br: 5,
  of:'hidden'
}

export default (props) => {
  console.log(props)
  /*--- Extraction ---*/
  const id = idx(props, _ => _.id)
  const name = idx(props, _ => _.name.nameDisplay)
  const nameAlias = idx(props, _ => _.name.nameAlias)
  const phone = idx(props, _ => _.contact.contactPhone)
  const email = idx(props, _ => _.contact.contactEmail)
  const website = idx(props, _ => _.metadata.metadataWebsite)
  const imageBanner = idx(props, _ => _.images.imageBanner)
  const image = idx(props, _ => _.images.imageFeatured)

  const street = idx(props, _ => _.address.addressStreet)
  const city = idx(props, _ => _.address.addressCity)
  const zip = idx(props, _ => _.address.addressZip)


  const tags = idx(props, _ => _.taxonomy.taxonomyTags)
  const category = idx(props, _ => _.taxonomy.taxonomyCategory)

  if (!props) return null
  /*--- Component ---*/
  return (
<Flex 
  direction={['row']}
  align='stretch'
  p={[10]}
  {...props}
  >

  <Flex
    direction={'column'}
    pb={10}
    w={[1,1,0.85]}
  >
    <Flex
      direction={'row'}
    >
      <Box>70% Complete</Box>
      <Box>High Priority</Box>
    </Flex>

    <Box
      bg='white'
      color='charcoal'
      p={10}
    >
      <Heading level={[3]} f={[3]} color='blue'>
        {name}
      </Heading>
    </Box>


  </Flex>

  <Flex
    height={[120]}
    w={[1,1,0.15]}
  >

  <BackgroundImage src={images.apartmensDusk}
    bc="white"
    br={5}
    bs={3}
  />

  </Flex>

</Flex>
)}