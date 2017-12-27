/* ------------------------- External Dependencies -------------------------- */
import shortid from 'shortid'
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Elements } from 'react-stripe-elements';
/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { stripeTokenCreateRequest, stripeInitializeRequest } from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */

class PaymentCreditCard extends Component {

  /*--- Property Types ---*/
  static propTypes = {

  }

  /*--- Default Properties ---*/
  static defaultProps = {

  }

  /*--- Component Mount ---*/
  componentDidMount() {
      this.props.dispatch(stripeInitializeRequest())
  }

  /*--- Render ---*/
  render() {
    return (
    <div>
      <FormRender { ...this.props} />
    </div>
    )
  }
}


/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  
  const tid = shortid.generate()
  const payload = {
    tid: tid,
    order: 'test',
    type: 'card'
  }
  dispatch(stripeTokenCreateRequest({payload}))
})

const redo = (data, dispatch, props) => new Promise((resolve, reject) => {
  const tid = shortid.generate()
  const payload = {
    tid: tid,
    order: 'test',
    type: 'card'
  }
  dispatch(stripeTokenCreateRequest({payload}))
})

/* -------------------------- Form Configuration ---------------------------- */
const mapStateToProps = (state) => ({
  initialValues: {
    ready: state.stripe.status
  }
})

const mapDispatchToProps = dispatch => ({

})

const config = {
  form: 'FormPaymentCreditCard',
  fields: [
    'cardNumber',
    'cardExperiationMonth',
    'cardExperiationYear',
    'cardCVV',
    'cardZipCode'
  ],
  destroyOnUnmount: true,
  onSubmit,
  redo,
  validate
}

/*-- Export Form ---*/
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(PaymentCreditCard))
