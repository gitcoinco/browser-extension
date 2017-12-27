/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete,
  SelectField,
} from 'redux-form-material-ui'
import TaxonomyCategory from 'static/forms/TaxonomyCategory'
/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'

/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ handleSubmit, isSubmitting, styled, ...props}) => (
<Block {...styled}>
  <Box>
    <Field name="searchNameDisplay" placeholder="Project Name" component={ReduxField} type="text" />
    <Field name="searchNameAlias" placeholder="alias" component={ReduxField} type="text" mt={[10]} />
    <Field
      name="searchTaxonomyCategory"
      component={AutoComplete}
      floatingLabelText="Taxonomy Category"
      filter={MUIAutoComplete.fuzzyFilter}
      dataSource={props.dataSource ? props.dataSource : TaxonomyCategory}
      maxSearchResults={6}
      openOnFocus
      fullWidth
    />
  </Box>
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
  </Box>
</Block>
)