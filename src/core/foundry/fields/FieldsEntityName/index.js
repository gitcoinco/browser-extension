/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box, Flex } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import entityAlias from 'logic/forms/normalize/alias'
/* ---------------------------- Module Package ------------------------------ */
export default props => (
<Flex direction='column' wrap='wrap' {...props.styledWrapper}>
  <Flex {...props.styledFieldOuter} >
    <Field 
      name="nameDisplay"
      placeholder="Entity Name"
      component={ReduxField}
      type="text"
      color='blue'
      mh={50}
      f={[4]}
      fw='700'
      {...props}
    />
  </Flex>
  <Field
    name="nameAlias"
    placeholder="Alias (unique identifier)"
    component={ReduxField}
    type="text"
    normalize={entityAlias}
    color='gray' 
    f={[1]}
    {...props}
  />
</Flex>
)