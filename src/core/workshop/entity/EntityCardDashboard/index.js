/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import Absolute from 'atoms/Absolute'
import BackgroundImage from 'atoms/BackgroundImage'
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import Link from 'atoms/Link'
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
  /*--- Extraction ---*/
  const{ data } = props
  /*--- Extraction ---*/
  const id = idx(props, _ => _.id)
  const nameDisplay = idx(props, _ => _.name.nameDisplay)
  const nameAlias = idx(props, _ => _.name.nameAlias)
  const phone = idx(props, _ => _.contact.contactPhone)
  const email = idx(props, _ => _.contact.contactEmail)
  const website = idx(props, _ => _.metadata.metadataWebsite)
  const imageBanner = idx(props, _ => _.images.imageBanner)

  const street = idx(props, _ => _.address.addressStreet)
  const city = idx(props, _ => _.address.addressCity)
  const zip = idx(props, _ => _.address.addressZip)

  if (!props.id) return null
  /*--- Component ---*/
  return <Flex direction={['row']} align='stretch' justify='center' p={[10]} {...props} key={id} >
      <Box {...mainLayout}>
        {!imageBanner ? null : 
         <Link to={`/dashboard/${props.entity}/${id}`} color='blue'>
          <Box height={[100,160]} of='hidden' position='relative'>
            <BackgroundImage src={imageBanner}/>
          </Box>
        </Link>
        }
        <Box p={[10]} >
          <Link to={`/dashboard/${props.entity}/${id}`} color='blue' >
            <Heading 
              f={[3,4]}
              level={3}
              color='purple'
              children={nameDisplay} 
            />
          </Link>
          { !nameAlias?null:
          <Heading f={[2]} level={3} color='blue'>
            Alias: {nameAlias}
          </Heading>}
          { !website?null:
          <Heading f={[2]} level={3} color='blue' fw={[300]}><strong>Website: </strong>{website}</Heading>}
          { !email?null:
          <Heading f={[2]} level={3} fw={[300]}><strong>Email:</strong>{email}</Heading>}
          { !street ?null
          :<HorizontalRule bc='blue' o={0.3}/>
          }
          
          { !street ?null
          :<Heading f={[2]} level={3} fw={[300]}>Addresss: {street + ", " + city + " " + zip } </Heading>
          }
        </Box>
      </Box>
    </Flex>
}