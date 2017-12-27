/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'

/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ handleSubmit, isSubmitting, styled}) => (
<Block {...styled}>
  <Box>
    <Field name="searchArticleName" placeholder="Article Name" component={ReduxField} type="text" />
    <Field name="searchArticleAlias" placeholder="Alias(Codename)" component={ReduxField} type="text" mt={[10]} />
  </Box>
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
  </Box>
</Block>
)