/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  compose,
  lifecycle,
  withProps,
  withState,
  renderComponent
} from 'recompose'
import { connect } from 'react-redux'
import { Field, reduxForm} from 'redux-form'
import styled from 'styled-components'
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle
} from 'redux-form-material-ui'
/* ------------------------- External Dependencies -------------------------- */
import { svg } from 'assets'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
/* ------------------------- External Dependencies -------------------------- */
const TaskInput = styled.textarea`
  box-shadow: none;
  border: none;
  margin: 0;
  width: 100%;
`
/* ------------------------------- Container -------------------------------- */


/* ------------------------------- Component -------------------------------- */
export default props => 
<Flex
  align='center'
>

  <Box
    className={'todo--dragHandle'}
    w={[0.025]}
  >
  <SVG svg={svg.uiList} svgColor='charcoal' w={15} />
  </Box>
  <Box
    className={'todo--dragHandle'}
    w={[0.025]}
  >
    <Field name="todoStatus" component={Checkbox} />
  </Box>
  <Box
    className={'todo--taskInput'}
    w={[0.925]}
  >
    <TaskInput/>
  </Box>

</Flex>

/* -------------------------- Form Configuration ---------------------------- */
