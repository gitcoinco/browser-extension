/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive, ReduxField
} from 'atomic'
import { FormBase } from 'foundry'

export default ({handleSubmit, isSubmitting, match, ...props}) => (
  <FormBase {...props} bg='white' p={10} >
    <div id="card-element"></div>
    <Button type="submit" onClick={handleSubmit} gradient='blue'w={1} >Submit</Button>
  </FormBase>
)

