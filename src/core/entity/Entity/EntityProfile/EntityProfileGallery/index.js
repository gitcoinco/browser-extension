/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import {Flex, Box, Heading, Route} from 'atomic'
import {
  FormGalleryAdd,
  ImageList,
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={20} bg='grayLight' bs={1} mb={20}>
<Heading level={[3]} f={[4,5]} color='blue' >
  Gallery
</Heading>

  <Flex>
    <Box w={[1,1,0.75]}>
      {!idx(props, _ => _.images.imageGallery) ? null :
      <Route exact path="/dashboard/:entity/:eid" data={idx(props, _ => _.images.imageGallery)} component={ImageList}/> 
      }
    </Box>
      <Route exact path="/dashboard/:entity/:eid" component={FormGalleryAdd} collection={props.collection} {...props} />
  </Flex> 
  </Box>