/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import idx from 'idx'
import { Absolute} from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
/* ------------------------------- Component -------------------------------- */
const imageLayout = {
  align: 'center',
  justify: 'center',
  direction: ['column'],
  br: ['0 10px 10px 0'],
  gradient:'purple',
  py:[10],
  textAlign: 'center',
  w:[0.03],
}

const mainLayout = {
  bg:'white',
  pl:[10],
  p:[7.5],
  w:[0.97],
}

export default (props) => {
  const name = idx(props, _ => _.name.nameDisplay)
  const nameAlias = idx(props, _ => _.name.nameAlias)
  const phone = idx(props, _ => _.contact.contactPhone)
  const email = idx(props, _ => _.contact.contactEmail)
  const url = idx(props, _ => _.contact.contactURL)
  const street = idx(props, _ => _.address.addressStreet)
  const city = idx(props, _ => _.address.addressCity)
  const zip = idx(props, _ => _.address.addressZip)

return <Flex direction={['row']} align='stretch' justify='center' w={[1]} {...props} >
  <Flex {...imageLayout } >

  </Flex>
  <Box {...mainLayout}>
    <Heading f={[4]} level={3} display='inline-block' children={name|| null} />
    <Heading f={[2]} level={3} color='charcoal' ml={[5]} display='inline-block'>Alias: {nameAlias}</Heading>
    <HorizontalRule bc='blue' />
    { !email?null:<Heading f={[2]} level={3} fw={[300]}><strong>Email:</strong>{email}</Heading>}
    { !phone?null:<Heading f={[2]} level={3} fw={[300]}><strong>Phone:</strong>{phone}</Heading>}
    { !url?null:<Heading f={[3]} level={4} fw={[300]}><strong>URL</strong>{url}</Heading>}
    { !street ?null
    :<HorizontalRule bc='blue' o={0.3}/>
    }
    
    { !street ?null
    :<Heading f={[2]} level={3} fw={[300]}><strong>Address:</strong> {street + ", " + city + " " + zip } </Heading>
    }
        
  </Box>
</Flex>
}