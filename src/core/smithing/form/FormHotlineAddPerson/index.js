/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import { recompose } from 'recompose'
import { connect } from 'react-redux'
import { 
  compose,
  lifecycle,
} from 'recompose'
import { 
  reduxForm,
  reset
} from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import {
  entityAddRequest,
  databaseWriteRequest,
  firestoreDocumentFilterGetRequest,
 } from 'store/departments/actions'
import {  fromAuthentication, fromFirestore } from 'store/departments/selectors'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Recompose ------------------------------ */
/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
    this.props.firestoreDocumentFilterGetRequest({
      payload: {},
      metadata:{
        branch: [
          'people'
        ],
        delta: 'ContributorsHotlineActive'
      }
    })
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})


/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, state) => new Promise((resolve, reject) => {
  const { timeStart, timeEnd, dateStart, dateEnd } = data

  const submission = {}
  submission.date =  _.pickBy(data, (value, key)=> key.startsWith("date"));
  submission.hotline =  _.pickBy(data, (value, key)=> key.startsWith("hotlineSelection"));
  /*---*--- Hotline Data Format | documentation/volunteer/hotline --*---*/

  submission.time = {}
  submission.time.days = _.pickBy(data, (value, key)=> key.startsWith("day"));
  submission.time.hourStart = !timeStart ? null : timeStart.getHours()
  submission.time.hourEnd = !timeEnd ? null : timeEnd.getHours()
  submission.time.minuteStart = !timeStart ? null : timeStart.getMinutes()
  submission.time.minuteEnd = !timeEnd ? null : timeEnd.getMinutes()

  submission.time.epochStart = !dateStart ? null : dateStart.getTime() / 1000
  submission.time.epochEnd = !dateEnd ? null : dateEnd.getTime() / 1000

  data.contributorPeople

  data.contributorPeople.map((v, i)=> {
    submission.relationships = [data.contributorPeople[i]]
    submission.name = {nameDisplay: data.contributorPeople[i].nameDisplay}
    dispatch(entityAddRequest({
      payload: submission, 
      metadata: {
      branch: [
        'hotline'
      ],
      delta: 'HotlineAdd',
      trigger: 'HotlineCalendar',
      }
    }))
  })


})

const mapStateToProps = (state, props) => { 
  return {
    contributors: fromFirestore.getQueryData(state, 'ContributorsHotlineActive'),
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentFilterGetRequest: (settings)=>dispatch(firestoreDocumentFilterGetRequest(settings)),
})

/* -------------------------- Form Configuration ---------------------------- */
const config = {
  form: 'TwilioTextSend',
  fields: [
    'timeStart',
    'timeEnd',
    'dateStart',
    'dateEnd',
    'dayMonday',
    'dayTuesday',
    'dayWednesday',
    'dayThursday',
    'dayFriday',
    'daySaturday',
    'daySunday',
    'userRequesting',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}
/*-- Export Form ---*/
const Render = props => <FormRender { ...props} />
export default compose(
  reduxForm(config),
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(Render);

