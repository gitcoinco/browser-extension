import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const opposites = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
}

const opposite = ({ position }) => opposites[position]

const perpendicular = ({ position }) =>
  position === 'left' || position === 'right' ? 'top' : 'left'

const perpendicularOpposite = props => opposites[perpendicular(props)]

const perpendicularAxis = ({ position }) =>
  position === 'left' || position === 'right' ? 'Y' : 'X'

const widthMaxRendered  = ({widthMax}) => `${widthMax}`

/**
 * Select a color from the background/foreground relationshop palette and apply to background
 * @param {Bool} transparent 
 * @param {String} background 
 * @param {String} color 
 * @param {Number} paletteIndex 
 * 
 */
const backgroundColor = ({ transparent, background, paletteIndex }) =>
  transparent 
  ? 'transparent' 
  : palette('whiteBackground', 0, true)

const styles = css`
  position: relative;

  &:before,
  &:after {
    position: absolute;
    pointer-events: none;
    display: block;
    opacity: 0;
    transition: opacity 100ms ease-in-out, ${opposite} 100ms ease-in-out;
    will-change: ${opposite};
  }

  &:hover:before,
  &:focus:before {
    opacity: 1;
    ${opposite}: calc(100% + 1rem);
  }

  &:hover:after,
  &:focus:after {
    opacity: 1;
    ${opposite}: 100%;
  }

  &:before {
    background-color: ${backgroundColor};
    border-radius: 0.15384em;
    color: ${ifProp('reverse', 'black', 'white')};
    content: attr(data-title);
    font-family: ${font('primary')};
    font-size: 0.8125rem;
    line-height: 1.5;
    text-align: center;
    text-transform: none;
    padding: 0.75em 1em;
    width: ${widthMaxRendered};
    white-space: pre-wrap;

    ${opposite}: calc(100% + 2rem);
    ${({ align }) => {
      switch (align) {
        case 'start': return css`
          ${perpendicular}: 0;
        `
        case 'center': return css`
          ${perpendicular}: 50%;
          transform: translate${perpendicularAxis}(-50%);
        `
        default: return css`
          ${perpendicularOpposite}: 0;
        `
      }
    }}
  }

  &:after {
    ${opposite}: calc(100% + 1rem);
    ${perpendicular}: 50%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    border-${({ position }) => position}-color: ${backgroundColor};
    border-width: 0.5rem;
    margin-${perpendicular}: -0.5rem;
  }
`

const Tooltip = styled(({ position, align, reverse, children, theme, ...props }) =>
  React.cloneElement(children, props)
)`${styles}`

Tooltip.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  background: PropTypes.string,
  children: PropTypes.element.isRequired,
  fontSize: PropTypes.string,
  'data-title': PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  reverse: PropTypes.bool,
  transparent: PropTypes.bool,
  paletteIndex: PropTypes.number,
  widthMax: PropTypes.string,
}

Tooltip.defaultProps = {
  align: 'center',
  background: 'white',
  position: 'top',
  paletteIndex: 0,
  tabIndex: 0,
  widthMax: "220px ",
}

export default Tooltip
