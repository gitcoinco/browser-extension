/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
 Flex, Box,
 BackgroundImage, BackgroundGradient,
 Button, Heading, Image, Link, Paragraph,
} from 'atomic'
import { ResourceSearch} from 'entity'
import {FirestoreList, PopoverPure } from 'containers'
import DialogOpen from 'containers/dialog/DialogOpen'
import PopoverClose from 'containers/popover/PopoverClose'
/* ------------------------------- Component -------------------------------- */
const Body = props => <Box w={[1,1,675]} bs={4} br={10} >
  <Flex direction={['column', 'row']} >
    <Box w={[1,1,0.45]} bg='sand' p={[10,15]} bs={1} >
      <Heading level={[3]} f={[3,4]}color='blue'>Resources</Heading>
      <Paragraph f={[1]}>
        Easily find Organizations in the Marin County Community. Search by type, services, availability, etc...
      </Paragraph>
      {DialogOpen ? <DialogOpen foundry='ResourceAddFull'><PopoverClose delta='MenuResource' ><Button gradient='cherry' w={1} >
        Add Resource
      </Button></PopoverClose></DialogOpen> : null }
      <Heading level={[3]} f={[3,4]} color='blue' mt={15}>
        Get Involved
      </Heading>
      <Paragraph f={[1]}>
        Contribute to the Ethereum community. Use, write and create videos for community resources.
      </Paragraph>
      <PopoverClose delta='MenuResource'><Button gradient='blue' mt={10} w={1}>
        <Link to="/dashboard/resources/map">
          Realtime Map
        </Link>
        </Button></PopoverClose>
      <PopoverClose delta='MenuResource'><Button gradient='blue' mt={10} w={1}>
        <Link to="/dashboard/resources">
          Advanced Search
        </Link>
        </Button></PopoverClose>
    </Box>
    <Box w={[1,1,0.7]} bg='white' color='charcoal'p={[10,15]} bs={1}>
        <Box h={[300, 450]}>
            <PerfectScrollbar>
              <ResourceSearch/>
              <PopoverClose delta='MenuResource' >
                <FirestoreList
                  delta='ResourceSearch'
                  entity='resource'
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
    <PopoverPure delta='MenuResource' body={Body} >
      <Heading level={[3]} f={[3]}>
        Resources
      </Heading>
    </PopoverPure>
    </Box>
</Flex>