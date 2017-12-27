/* ------------------------- External Dependencies -------------------------- */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

/* ----------------------------- Styled Childs ------------------------------ */
const Label = styled.label`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 1)};
  font-size: 1rem;
  line-height: 2em;
`

Label.propTypes = {
  reverse: PropTypes.bool,
}

export default Label
