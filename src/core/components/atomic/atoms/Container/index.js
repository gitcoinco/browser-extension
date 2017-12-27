/* ------------------------- External Dependencies -------------------------- */
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { Block } from 'atomic'
/* --------------------------- Styled Component ----------------------------- */
const Container = styled(Block)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`
Container.defaultProps = {
  is: 'div',
  w: [1, 1, 1120]
}

export default Container
