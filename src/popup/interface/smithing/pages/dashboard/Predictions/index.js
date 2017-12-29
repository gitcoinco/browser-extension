/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { svg, images, screen} from 'assets'

/*-* Atoms *-*/
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Container from 'atoms/Container'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import SVG from 'atoms/SVG'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import List from 'atoms/List'
import Span from 'atoms/Span'
import Shape from 'atoms/Shape'
import Section from 'atoms/Section'
import HorizontalRule from 'atoms/HorizontalRule'
import Image from 'atoms/Image'
import BackgroundGradient from 'atoms/BackgroundGradient'
import BackgroundImage from 'atoms/BackgroundImage'

/*-* Foundry *-*/

import { IconCircle } from 'foundry'
import MacbookDisplay from 'components/sentient/MacbookDisplay'
import BrowserDisplay from 'components/sentient/BrowserDisplay'

import GraphNetwork from 'smithing/graphs/GraphNetwork'
import GraphRadial from 'smithing/graphs/GraphRadial'
import GraphPies from 'smithing/graphs/GraphPies'
import GraphAreaToolTip from 'smithing/graphs/GraphAreaToolTip'
import GraphBarStackHorizontal from 'smithing/graphs/GraphBarStackHorizontal'
import GraphAxis from 'smithing/graphs/GraphAxis'
import GraphDendrogram from 'smithing/graphs/GraphDendrogram'
/* ------------------------------- Component -------------------------------- */
export default props => (<div>

  <Flex
      justify='space-evenly'
    >

      {/*Item 1*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.48]}
      >
        <GraphPies width={480} height={480} />
      </Box>

      {/*Item 2*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.48]}
      >
        <GraphRadial width={480} height={480} />
      </Box>

    </Flex>

    {/*<GraphAreaToolTip width={880} height={480} />*/}
    <Container w={[880]} my={50} >
      <GraphBarStackHorizontal width={880} height={480} />
    </Container>
    <Container w={[880]} my={50} >

    </Container>
    <Container w={[880]} my={50} >
      <GraphDendrogram width={880} height={480} />
    </Container>

</div>)