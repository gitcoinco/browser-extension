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

  <Container w={[1120]} py={[15,25]} >
    <Heading level={[3]} f={[5,6]} color='blue' ta='center'>
      Manage Time Like A <em>"Boss"</em> 🚀
    </Heading>
  
    <Paragraph f={[2]} ta='center'>
      Start by adding a new project, checking on existing deals or inviting new contributors.
    </Paragraph>
  
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
        w={[1,1, 0.333333]}
      >
        <SVG svg={svg.conversion} svgColor='blue' h={100} />
        <Paragraph f={[1]}>
          Maecenas aliquam, urna ut porta blandit, mauris enim ultricies elit, sed ornare dui nibh vel felis. 
        </Paragraph>
        <Button gradien='blueLight' >Add Deal</Button>
      </Box>
      {/*Item 1*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.333333]}
      >
        <SVG svg={svg.automation} svgColor='blue' h={100} />
        <Paragraph f={[1]}>
          Maecenas aliquam, urna ut porta blandit, mauris enim ultricies elit, sed ornare dui nibh vel felis. 
        </Paragraph>
        <Button gradien='blueLight' >Analyze Data</Button>
      </Box>
      {/*Item 1*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.3]}
      >
        <SVG svg={svg.city} svgColor='blue' h={100} />
        <Paragraph f={[1]}>
          Maecenas aliquam, urna ut porta blandit, mauris enim ultricies elit, sed ornare dui nibh vel felis. 
        </Paragraph>
        <Button gradien='blueLight' >Find Projects</Button>
      </Box>

    </Flex>
  </Container>
  <Container w={[1120]} py={[15,25]} >

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
        w={[1,1, 0.333333]}
      >
        <SVG svg={svg.conversion} svgColor='blue' h={100} />
        <Paragraph f={[1]}>
          Maecenas aliquam, urna ut porta blandit, mauris enim ultricies elit, sed ornare dui nibh vel felis. 
        </Paragraph>
        <Button gradien='blueLight' >Add Deal</Button>
      </Box>
      {/*Item 1*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.333333]}
      >
        <SVG svg={svg.automation} svgColor='blue' h={100} />
        <Paragraph f={[1]}>
          Maecenas aliquam, urna ut porta blandit, mauris enim ultricies elit, sed ornare dui nibh vel felis. 
        </Paragraph>
        <Button gradien='blueLight' >Analyze Data</Button>
      </Box>
      {/*Item 1*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.3]}
      >
        <SVG svg={svg.city} svgColor='blue' h={100} />
        <Paragraph f={[1]}>
          Maecenas aliquam, urna ut porta blandit, mauris enim ultricies elit, sed ornare dui nibh vel felis. 
        </Paragraph>
        <Button gradien='blueLight' >Find Projects</Button>
      </Box>

    </Flex>
  </Container>
  <Container w={[1120]} py={[15,25]} >
  
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
        w={[1,1, 0.333333]}
      >
        <SVG svg={svg.conversion} svgColor='blue' h={100} />
        <Paragraph f={[1]}>
          Maecenas aliquam, urna ut porta blandit, mauris enim ultricies elit, sed ornare dui nibh vel felis. 
        </Paragraph>
        <Button gradien='blueLight' >Add Deal</Button>
      </Box>
      {/*Item 1*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.333333]}
      >
        <SVG svg={svg.automation} svgColor='blue' h={100} />
        <Paragraph f={[1]}>
          Maecenas aliquam, urna ut porta blandit, mauris enim ultricies elit, sed ornare dui nibh vel felis. 
        </Paragraph>
        <Button gradien='blueLight' >Analyze Data</Button>
      </Box>
      {/*Item 1*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.3]}
      >
        <SVG svg={svg.city} svgColor='blue' h={100} />
        <Paragraph f={[1]}>
          Maecenas aliquam, urna ut porta blandit, mauris enim ultricies elit, sed ornare dui nibh vel felis. 
        </Paragraph>
        <Button gradien='blueLight' >Find Projects</Button>
      </Box>

    </Flex>
  </Container>

</div>)