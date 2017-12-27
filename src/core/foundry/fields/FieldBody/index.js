/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'
import Box from 'atoms/Box'
import Flex from 'atoms/Flex'
import ReduxField from 'organisms/ReduxField'

/* ------------------------------- Component -------------------------------- */
export default props => (
<Flex direction='column' wrap='wrap' {...props.styledWrapper}>
  <Box w={1}>
    <Field
      type="textarea"
      name="contentBody"
      component={ReduxField}
      mt={[10]}
      {...props.fields} />
  </Box>
</Flex>
)
