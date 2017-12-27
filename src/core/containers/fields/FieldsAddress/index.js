/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Flex,  } from 'atomic'
import {
  DatePicker,
  TimePicker
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'

/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionComponent = props => (
    <Flex direction={['column', 'row']} justify='space-evenly' wrap='wrap' {...props} >
      <Flex w={[1]} mb={[10]}  {...props.styledFieldOuter}>
        <Field 
          name="addressStreet"
          placeholder="Street"
          component={ReduxField}
          type="text"
          height={30}
          {...props}
          />
      </Flex>
      <Flex pr={10} w={[1, 1, 0.33333]} {...props.styledFieldOuter} >
        <Field name="addressCity" placeholder="City" component={ReduxField} type="text" height={30} mr={[10]} {...props}/>
      </Flex>
      <Flex px={5} w={[1, 1, 0.33333]} {...props.styledFieldOuter}>
        <Field name="addressState" placeholder="State" component={ReduxField} type="text" height={30} mr={[10]} {...props}/>
      </Flex>
      <Flex pl={10} w={[1, 1, 0.33333]} {...props.styledFieldOuter} >
        <Field name="addressZip" placeholder="Zip" component={ReduxField} type="number" height={30} {...props}/>
      </Flex>

      <Flex w={[1]} mt={[10]} {...props.styledFieldOuter}>
        <Field name="addressCountry" placeholder="Country" component={ReduxField} type="text" height={30} {...props}/>
      </Flex>
    </Flex>
  )

export default FieldCollectionComponent
