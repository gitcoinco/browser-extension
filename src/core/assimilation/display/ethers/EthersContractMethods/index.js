/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import HorizontalRule from 'atoms/HorizontalRule'
import Absolute from 'atoms/Absolute'
import Container from 'atoms/Container'
import Box from 'atoms/Box'
import Flex from 'atoms/Flex'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import List from 'atoms/List'
/* ---------------------------- Module Package ------------------------------ */
const MethodOutput = props =>
<Box w={1} >
  <Paragraph f={[1]}>
    Name: {idx(props, _=>_.name)}
  </Paragraph>
  <Paragraph f={[1]}>
    Type: {idx(props, _=>_.type)}
  </Paragraph>
</Box>

export default props => !props.name ? null :
<Box bs={0} br={10} p={[15,25]} mb={15} >
  <Heading level={[3]} f={[3]} color='blue' >
    {idx(props, _=>_.name)}
  </Heading>
  <HorizontalRule bi='turqoise' />
  <Paragraph>
    Constant: {`${props.constant}`}
  </Paragraph>
  <Paragraph>
    Type: {props.type}
  </Paragraph>
  <Paragraph>
    Payable:{`${props.payable}`}
  </Paragraph>
  {
    !(idx(props, _=>_.inputs) && props.inputs.length > 0 ) ? null :
    <div>
      <Heading level={[3]} f={[3]}>
        Inputs
      </Heading>
      <Flex direction="column" >
        {
          !(idx(props, _=>_.inputs)) ? null :
          props.inputs.map(input=><MethodOutput name={input.name} type={input.type}/>)
        }
      </Flex>
    </div>
  }
  {
    !(idx(props, _=>_.outputs) && props.outputs.length > 0 ) ? null :
    <div>
      <Heading level={[3]} f={[3]}>
        Outputs
      </Heading>
      <Flex direction="column" >
        {
          !(idx(props, _=>_.outputs)) ? null :
          props.outputs.map(input=><MethodOutput name={input.name} type={input.type}/>)
        }
      </Flex>
    </div>
  }
</Box>
