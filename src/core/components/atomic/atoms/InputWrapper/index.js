import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Block } from 'particles'

const InputWrapper = styled(Block)`
input {
    background-color: #ffffff;
    border-radius: 2px;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border: none;
    box-sizing: border-box;
    display: block;
    margin: 0;
    outline: none;
    padding: 0 0.4444444444em;
    position: relative;
    width: 100%;
}
`
export default props => <InputWrapper {...props} />