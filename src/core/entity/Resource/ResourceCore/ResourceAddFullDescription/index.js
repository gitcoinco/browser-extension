/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Flex, Box, Paragraph, Heading } from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box w={[1,1, 240, 320]} p={[10,15]} >
  <Heading level={[3]} f={[3]}>How</Heading>
 <Paragraph f={[1]}>
    Ut eget lacus iaculis ex dignissim malesuada. Curabitur imperdiet diam mauris, et posuere mi faucibus non. Etiam mollis aliquet rhoncus. Vestibulum nec neque accumsan, vestibulum augue sit amet, aliquet nisl.
 </Paragraph>
  <ul>
    <li>Example 1</li>
    <li>Example 2</li>
    <li>Example 3</li>
  </ul>
 <Paragraph f={[1]}>
   Sed accumsan sem sit amet lorem sagittis pretium. Nullam sit amet tempor orci. Etiam pulvinar tincidunt lorem at hendrerit. Cras vitae metus vel nibh aliquam vulputate. Maecenas scelerisque elementum aliquet. Quisque in justo turpis. Ut ut iaculis urna.
 </Paragraph>
</Box>