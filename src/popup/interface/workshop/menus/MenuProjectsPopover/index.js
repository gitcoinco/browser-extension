/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
 Flex, Box,
 BackgroundImage, BackgroundGradient,
 Button, Heading, Image, Link, Paragraph,
} from 'atomic'
import { ProjectSearch} from 'entity'
import {FirestoreList, PopoverPure } from 'containers'
import DialogOpen from 'containers/dialog/DialogOpen'
import PopoverClose from 'containers/popover/PopoverClose'
/* ------------------------------- Component -------------------------------- */
const Body = props => <Box w={[1,1,675]} bs={4} borderRadius={10} >
  <Flex direction={['column', 'row']} >
    <Box w={[1,1,0.45]} bg='sand' p={[10,15]} bs={1} >
      <Heading level={[3]} f={[3,4]}color='blue'>Projects</Heading>
      <Paragraph f={[1]}>
        Easily find Organizations in the Marin County Community. Search by type, services, availability, etc...
      </Paragraph>
      {DialogOpen ? <DialogOpen foundry='ProjectAddFull'><PopoverClose delta='MenuProject' ><Button gradient='cherry' w={1} >
        Add Project
      </Button></PopoverClose></DialogOpen> : null }
      <Heading level={[3]} f={[3,4]} color='blue' mt={15}>
        Get Involved
      </Heading>
      <Paragraph f={[1]}>
        Contribute to the Ethereum community. Use, write and create videos for community products.
      </Paragraph>
      <PopoverClose delta='MenuProject'><Button gradient='blue' mt={10} w={1}>
        <Link to="/dashboard/products/map">
          Realtime Map
        </Link>
        </Button></PopoverClose>
      <PopoverClose delta='MenuProject'><Button gradient='blue' mt={10} w={1}>
        <Link to="/dashboard/products">
          Advanced Search
        </Link>
        </Button></PopoverClose>
    </Box>
    <Box w={[1,1,0.7]} bg='white' color='charcoal'p={[10,15]} bs={1}>
        <Box h={[300, 450]}>
            <PerfectScrollbar>
              <ProjectSearch/>
              <PopoverClose delta='MenuProject' >
                <FirestoreList
                  delta='ProjectSearch'
                  entity='project'
                  foundry='EntityCard'
                  styled={{
                    w: [1],
                  }}
                  {...props}
                />
              </PopoverClose>
            </PerfectScrollbar>
        </Box>
    </Box>
  </Flex>
</Box>


export default props => <Flex diretion={['column', 'row']} >
  <Box px={[10]}>
    <PopoverPure delta='MenuProject' body={Body} >
      <Heading level={[3]} f={[3]}>
        Projects
      </Heading>
    </PopoverPure>
    </Box>
</Flex>