/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import { Absolute } from 'particles'
import {
 Flex, Box, BackgroundImage, BackgroundGradient, Heading, Route
} from 'atomic'
import {
  ImageList,
  FormBannerAdd,
  VideoEmbed,
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box
  bs={3}
  color='white'
  position='relative'
  mh={[200,260]} py={[40,80]} of='hidden' ta='center' >
  {console.log(props)}
  <BackgroundGradient gradient='ibize' />
  {!idx(props, _ => _.images.imageBanner) ? null : 
  <BackgroundImage src={idx(props, _ => _.images.imageBanner)} o={0.5}/>
  }
  <Flex align='center' direction={['column']} justify='center' color='white' w={1} ta='center' >
    { !idx(props, _ => _.name.nameDisplay) ? null :
    <Heading f={[6,7]} level={3} children={idx(props, _ => _.name.nameDisplay)} ts={'darkPurple'} />}
    { !idx(props, _ => _.name.nameAlias) ? null :
    <Heading f={[3]} level={4} ml={[5]} fw='300' >Alias: {idx(props, _ => _.name.nameAlias)}</Heading>}
    {!idx(props, _ => _.metadata.metadataVideo) ? null : 
    <Box z={10}><VideoEmbed url={idx(props, _ => _.metadata.metadataVideo)}/></Box>}
  </Flex>
  <Absolute bottom right>
    <Box p={20} w={[1,1, 510]} >
      {!props ? null : <Route path="/dashboard/:entity/:eid" component={FormBannerAdd} collection={props.collection}  /> }
    </Box>
  </Absolute>
</Box>