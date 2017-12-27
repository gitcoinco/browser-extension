/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import { Flex, Box } from 'atomic'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'

const PlaceField = props => 
<PlacesAutocomplete 
  googleLogo={false}
  inputProps={{
    placeholder:"Ex: San Rafael, CA, United States",
    ...props.input
  }}
/>

/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionComponent = ({address, setAddress, styledField, styledFieldOuter, ...props}) => (
<Box z={15} {...styledFieldOuter} >
  <Field 
    name="addressAutoComplete"
    component={PlaceField}
    type="text"
    height={30}
    {...styledField}
    {...props}
  />
</Box>
)

export default FieldCollectionComponent
