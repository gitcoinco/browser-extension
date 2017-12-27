/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
 Flex, Box,
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
import DialogOpen from 'containers/dialog/DialogOpen'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box {...props.container} of='hidden' >
  <DialogOpen delta={`${props.md5Hash}`} src={props.src} foundry='ImageLightbox' >
    <Image src={props.src}/>
  </DialogOpen>
</Box>