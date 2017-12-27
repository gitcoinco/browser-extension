/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box, Flex } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'

/* ---------------------------- Module Package ------------------------------ */
export default props => (
<Field 
  name="createdBy"
  placeholder="AuthenticationID"
  component={ReduxField}
  type="hidden"
/>
)