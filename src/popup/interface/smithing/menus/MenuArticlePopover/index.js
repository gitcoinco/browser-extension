/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import Image from 'atoms/Image'
import { ArticleSearch} from 'entity'
import {FirestoreList, PopoverPure } from 'containers'
import DialogOpen from 'containers/dialog/DialogOpen'
import PopoverClose from 'containers/popover/PopoverClose'
/* ------------------------------- Component -------------------------------- */
const Body = props => <Box w={[1,1,675]} bs={4} br={10} >
  <Flex direction={['column', 'row']} >
    <Box w={[1,1,0.45]} bg='sand' p={[10,15]} bs={1} >
      <Heading level={[3]} f={[3,4]}color='blue'>Articles</Heading>
      <Paragraph f={[1]}>
        Easily find Organizations in the Marin County Community. Search by type, services, availability, etc...
      </Paragraph>
      {DialogOpen ? <DialogOpen foundry='ArticleAddFull'><PopoverClose delta='MenuArticle' ><Button gradient='cherry' w={1} >
        Add Article
      </Button></PopoverClose></DialogOpen> : null }
      <Heading level={[3]} f={[3,4]} color='blue' mt={15}>
        Get Involved
      </Heading>
      <Paragraph f={[1]}>
        Contribute to the Ethereum community. Use, write and create videos for community products.
      </Paragraph>
      <PopoverClose delta='MenuArticle'><Button gradient='blue' mt={10} w={1}>
        <Link to="/dashboard/products/map">
          Realtime Map
        </Link>
        </Button></PopoverClose>
      <PopoverClose delta='MenuArticle'><Button gradient='blue' mt={10} w={1}>
        <Link to="/dashboard/products">
          Advanced Search
        </Link>
        </Button></PopoverClose>
    </Box>
    <Box w={[1,1,0.7]} bg='white' color='charcoal'p={[10,15]} bs={1}>
        <Box h={[300, 450]}>
            <PerfectScrollbar>
              <ArticleSearch/>
              <PopoverClose delta='MenuArticle' >
                <FirestoreList
                  delta='ArticleSearch'
                  entity='article'
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
    <PopoverPure delta='MenuArticle' body={Body} >
      <Heading level={[3]} f={[3]}>
        Articles
      </Heading>
    </PopoverPure>
    </Box>
</Flex>