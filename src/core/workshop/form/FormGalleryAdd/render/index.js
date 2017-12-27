/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import Dropzone from 'react-dropzone'
/* ------------------------- Internal Dependencies -------------------------- */
import { ReduxField } from 'atomic'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

/* --------------------------- Styled Components ---------------------------- */
const Drop = styled(Dropzone)`
  border: 2px dashed #4751c3;
  border-radius: 5px;
  padding: 50px 20px;
  width: 100%;
`
/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, layout, onFilesDrop, uploadedFiles } = props
  return (
    <Box  {...layout} {...props}>
      <Drop onDrop={onFilesDrop} style={{width:'100%'}} >
        <div><Heading f={2} ta='center' >
          Add Images to Gallery<br/>Drag/Drop or Click  
        </Heading></div>
      </Drop>
      {
        uploadedFiles &&
          <div>
            <h3>
              Uploaded file(s):
            </h3>
            {
              _.map(uploadedFiles, (file, key) => (
                <div key={file.name + key}>
                  <span>{file.name}</span>
                  <button onClick={() => this.onFileDelete(file, key)}>
                    Delete File
                  </button>
                </div>
              ))
            }
          </div>
        }
    </Box>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

FormElements.defaultProps = {
  is: 'form',
}

export default FormElements
