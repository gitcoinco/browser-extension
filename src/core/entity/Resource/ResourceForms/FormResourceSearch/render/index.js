/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import Block from 'atoms/Block'
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import Image from 'atoms/Image'
import Button from 'atoms/Button'
import Span from 'atoms/Span'
import ReduxField from 'organisms/ReduxField'
/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ handleSubmit, isSubmitting, styled}) => (
<Block {...styled}>
  <Box>
    <Field name="searchResourceName" placeholder="Resource Name" component={ReduxField} type="text" />
    <Field name="searchResourceAlias" placeholder="Alias(Codename)" component={ReduxField} type="text" mt={[10]} />
  </Box>
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
  </Box>
</Block>
)