import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Absolute, Flex, Box } from 'particles'
import {Heading, Image, Paragraph, Container, Section} from 'atomic'
import { color, fontSize, space, width } from 'quarks'

import { Label, Input } from 'atomic'

const Error = styled.div`
  margin: 0.5rem 0 0;
`
const Wrapper = styled(Box)`
  position: relative;
  ${space}
  ${width}
  &:after {
    ${color}
    bottom: 0; left: 0; right: 0;
    content: "";
    height: 3px;
    position: absolute;
  }
  

  textarea {
    height: 150px;
  }

  input[type="checkbox"],
  input[type="radio"] {
    margin-right: 0.5rem;
  }
  label {
    vertical-align: middle;
  }
`
Wrapper.defaultProps = {
  w: 1,
}

const Field = ({ error, name, invalid, label, value, type, styledInput, styledField, ...props }) => {
  const inputProps = { id: name, name, invalid, label, type, value, ...styledInput, 'aria-describedby': `${name}Error`, ...props}
  const renderInputFirst = type === 'checkbox' || type === 'radio'
  return (
    <Wrapper  {...styledField} >
      {renderInputFirst && <Input {...inputProps} />}
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      {renderInputFirst || <Input {...inputProps} />}
      {invalid && error &&
        <Error id={`${name}Error`} role="alert" palette="danger">
          <Heading level={[5]} f={[1]} color={'gray'} >{error}</Heading>
        </Error>
      }
    </Wrapper>
  )
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}

Field.defaultProps = {
  type: 'text',
  w: 1,
}

export default Field
