import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { space, width, fontSize } from 'styled-system'

const colorRendered = ({ paletteIndex }) => palette(paletteIndex)
const inlineRendered = ({inline}) => inline ? `li {display:inline-block; &:not(:last-of-type) {margin-right: 10px;}}` : ''
const textAlignRendered = ({textCenter, textRight}) => textCenter ? 'center' : textRight ? textRight : 'inherit'

const styles = css`
  color: ${colorRendered};
  font-family: ${font('primary')};
  ${fontSize};
  ${space}
  line-height: 1.7rem;
  text-align: ${textAlignRendered};
  ${width}
  ${inlineRendered}
`

const Ol = styled.ol`${styles}`
const Ul = styled.ul`${styles}`

const List = ({ ordered, children, ...props }) => {
  return React.createElement(ordered ? Ol : Ul, props, children.map(child=><li>{child}</li>))
}

List.propTypes = {
  alignCenter: PropTypes.bool,
  children: PropTypes.any,
  ordered: PropTypes.bool,
  padding: PropTypes.string,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  textCenter: PropTypes.bool,
  textRight: PropTypes.bool
}

List.defaultProps = {
  fontSize: '3.25',
  padding: '10px 0 0 0',
  palette: 'inherit',
  paletteIndex: 0
}

export default List
