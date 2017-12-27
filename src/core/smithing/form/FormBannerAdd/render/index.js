/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { Flex, Box, Heading, Button } from 'atomic'
/* --------------------------- Styled Components ---------------------------- */
Block.defaultProps = {is: 'form'}
/** 
 * File input workarround:
 * More info: http://redux-form.com/5.2.5/#/examples/file?_k=57hmlw
 */
const CustomFileInput = (field) => {
  delete field.input.value;
  return <input type="file" id="file" {...field.input} />;
};


/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props, fields) => {
  const { handleSubmit, isSubmitting } = props
  return (
    <Block>
      <Flex align="center" justify="space-evenly" direction={['row']}>
        <Box>
          <Heading level={[3]} f={[1]}>Banner Upload</Heading>
        </Box>
        <Box ta={['right']} >
          <Field name="storageUpload" component={CustomFileInput} type="file" />
        </Box>
        <Box>
          <Button type="submit" onClick={handleSubmit} gradient='blue'w={1} >Submit</Button>
        </Box>
      </Flex>
    </Block>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
