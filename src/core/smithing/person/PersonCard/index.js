/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import idx from './idx';

/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute} from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

/* ------------------------------- Component -------------------------------- */
const mainLayout = {
  flex:['2 1 0'],
  bg:'white',
  bs:'1',
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
  const url = idx(props, _ => _.contact.contactURL)
  const imageBanner = idx(props, _ => _.images.imageBanner)

    const street = idx(props, _ => _.address.addressStreet)
  const city = idx(props, _ => _.address.addressCity)
  const zip = idx(props, _ => _.address.addressZip)

  if (!props.id) return null
  /*--- Component ---*/
  return <Flex direction={['row']} align='stretch' justify='center' p={[10]} {...props} key={id} >
      <Box {...mainLayout}>
        {!imageBanner ? null : 
         <Link to={`/dashboard/resource/${id}`} color='blue' ><Box height={[100,160]}>
          <BackgroundImage src={imageBanner}/>
        </Box></Link>
        }
        <Box p={[10]} >
          <Link to={`/dashboard/resource/${id}`} color='blue' >
            <Heading f={[4,4,5]} level={3} color='blue' display='inline-block' children={nameDisplay} />
            <Heading f={[2]} level={3} color='charcoal' ml={[5]} display='inline-block'>Alias: {nameAlias}</Heading>
          </Link>
          { !email?null:<Heading f={[2]} level={3} fw={[300]}><strong>Email:</strong>{email}</Heading>}
          { !url?null:<Heading f={[3]} level={4} fw={[300]}><strong>URL</strong>{url}</Heading>}
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