/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
/* ------------------------- Internal Dependencies -------------------------- */

/* ------------------------ Initialize Dependencies ------------------------- */

/* --------------------------- Child Components ----------------------------- */

/* ---------------------------- Module Package ------------------------------ */
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  render() {return this.props.children}
}
/* ---------------------------- Export Package ------------------------------ */
export default withRouter(ScrollToTop)
