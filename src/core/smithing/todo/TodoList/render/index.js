/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import TodoItem from 'workshop/todo/TodoItem'
import { FormBase } from 'foundry'
import { Flex, Box, Button, Container, Heading, HorizontalRule, ReduxField }from 'atomic'
import StyleFormDefault from 'static/style/StyleFormDefault'
const addressFormStyle = {
    styledInput:{
      bs: 1,
      br: 5,
    },
}


/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) => (
<FormBase {...props}>
  <TodoItem/>
  <TodoItem/>
  <TodoItem/>
  <TodoItem/>
  <TodoItem/>
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Submit</Button>
</FormBase>
)
