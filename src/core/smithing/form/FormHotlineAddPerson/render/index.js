/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  Checkbox,
  DatePicker,
  TimePicker,
  SelectField,
} from 'redux-form-material-ui'
import ChipInput from 'material-ui-chip-input'

/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { Flex, Box, Heading, Paragraph, Button, ReduxField } from 'atomic'
import { FieldsName, FieldContact } from 'foundry'
import normalizePhone from 'logic/forms/normalize/phone'

const RenderChip = ({input, hintText, floatingLabelText, dataSource, dataSourceConfig, valueDefault}) => {
  return <ChipInput
    {...input}
    value = { input.value || valueDefault}
    onRequestAdd={(addedChip) => {
      let values = input.value || [];
      values = values.slice();
      values.push(addedChip);
      input.onChange(values);
    }}
    onRequestDelete={(deletedChip) => {
      let values = input.value || [];
      if(!values) return 
      values = values.filter(v => v.eid !== deletedChip);
      input.onChange(values);
    }}
    onBlur={() => input.onBlur()}
    hintText={hintText}
    floatingLabelText={floatingLabelText}
    dataSource={dataSource}
    dataSourceConfig={dataSourceConfig}
    fullWidth
    />
}
/* ---------------------------- Form Component ------------------------------ */
export default (props) => {
  const { 
    handleSubmit, isSubmitting,
    valueDefault, contributors,
    styled
   } = props
   const AutoCompleteList = !contributors ? [] : contributors.map(v=>({eid:idx(v, _=> _.uid), nameDisplay: idx(v, _=> _.name.nameDisplay), entity: 'person'} ))
  return (
    
    <Block {...styled}>
      <Heading level={[2]} f={[4,6]} color='blue' >
        Hotline
      </Heading>
      <Heading level={[3]} f={[3]}>Add Active Volunteers to a Hotline</Heading>
      <Paragraph f={[1]}>
        Select Volunteers to be assigned "on-call" duty for the Multicultural Center of Marin Hotlines.
      </Paragraph>
      <Box>
        <Field
            name="hotlineSelection"
            component={SelectField}
            floatingLabelText="Hotline Selection"
            fullWidth
          >
            <MenuItem value="generalInformation" primaryText="General Information" />
            <MenuItem value="rapidResponse" primaryText="Rapid Response" />
            <MenuItem value="governmentExample" primaryText="Translation Assistance (Example)" />
            <MenuItem value="jobsExample" primaryText="Job Opportunities(Example)" />
            <MenuItem value="legalExample" primaryText="Legal Advice Pro Bono(Example)" />
          </Field>
        <Paragraph f={[1]}>
          Select a Hotline to assign volunteers.
        </Paragraph>
      </Box>
      <Field
        name="contributorPeople"
        valueDefault={valueDefault || []}
        floatingLabelText="Multiple Volunteers can be selected for the same time slot."
        dataSource={AutoCompleteList}
        component={RenderChip}
        dataSourceConfig={{ text: 'nameDisplay', value: 'eid' }}
        filter={MUIAutoComplete.fuzzyFilter}
        openOnFocus
        fullWidth
        styledField={{
          w: 1
        }}
      />
      <Heading level={[3]} f={[4]} color='indigo'>Time Range</Heading>
      <Paragraph f={[1]}>
        Please select start and end times.
      </Paragraph>
      <Flex direction={['column', 'row']}>
        <Box w={[1,1,0.5]} pr={10}>
          <Field name="timeStart" component={TimePicker} format={null} hintText="Time Start" fullWidth />
        </Box>
        <Box w={[1,1,0.5]} pr={10}>
          <Field name="timeEnd" component={TimePicker} format={null} hintText="Time End" fullWidth/>
        </Box>
      </Flex>
      <Heading level={[3]} f={[4]} color='indigo'>Date Range</Heading>
      <Paragraph f={[1]}>
        Please select start and end dates.
      </Paragraph>
      <Flex direction={['column', 'row']}>
        <Box w={[1,1,0.5]} pr={10}>
          <Field name="dateStart" component={DatePicker} format={null} hintText="Date Start" fullWidth />
        </Box>
        <Box w={[1,1,0.5]} pr={10}>
          <Field name="dateEnd" component={DatePicker} format={null} hintText="Date End" fullWidth/>
        </Box>
      </Flex>

      <Heading level={[3]} f={[4]} color='indigo'>Select Active Days</Heading>
      <Paragraph f={[1]}>
        Selecting <strong>day(s) are usually preferred</strong> if the calendar event extends more than a couple of day. Otherwise the Volunteer will be scheduled every single day between the "Date Start" and "Date End"
      </Paragraph>
      <Paragraph f={[1]}>
        For example, a Volunteer can be scheduled for exactly <strong>1 month</strong>, but only on <strong>Wednesday and Thursday</strong> from <strong>12:15pm to 4:30pm.</strong>
      </Paragraph>
      <Flex direction={['column']} w={[1]} justify='space-evenly' wrap='wrap' >
        <Box><Field name="daySunday" component={Checkbox} label="Sunday" /></Box>
        <Box><Field name="dayMonday" component={Checkbox} label="Monday" /></Box>
        <Box><Field name="dayTuesday" component={Checkbox} label="Tuesday" /></Box>
        <Box><Field name="dayWednesday" component={Checkbox} label="Wednesday" /></Box>
        <Box><Field name="dayThursday" component={Checkbox} label="Thursday" /></Box>
        <Box><Field name="dayFriday" component={Checkbox} label="Friday" /></Box>
        <Box><Field name="daySaturday" component={Checkbox} label="Saturday" /></Box>
      </Flex>
      
      <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={20}>Add Volunteer(s) to Hotline Schedule</Button>
    </Block>
  )
}