/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton'
import styled from 'styled-components'
import {
  RadioButtonGroup,
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import { icons, graphics } from 'assets'
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Button from 'atoms/Button'
import SVG from 'atoms/SVG'
import ReduxField from 'organisms/ReduxField'

const FormWrapper = styled.form`
  display: block;
  padding: 20px;
`

const FieldFlex = styled(Field)`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`
const FieldSearch = styled(Field)`
  &::placeholder {
    color: #FFF;
  }
`
const Radio = styled(RadioButton)`
  color: #FFF !important;
`

const FormElements = (props) => {
  const { handleSubmit } = props
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Flex justify='center' wrap='wrap' >
        <Flex align='center' w={[1]} >
          <FieldFlex name="delivery" component={RadioButtonGroup}>
            <RadioButton value="open" label="Open"
              uncheckedIcon={<SVG svg={icons.uiRadioDefault} svgColor='white' width={20} />}
              checkedIcon={<SVG svg={icons.uiRadioActive} svgColor='white' width={20} />}
            style={{color:'white'}} labelStyle={{color:'#FFF'}}  />
            <RadioButton 
              value="funded" label="Funded"
              uncheckedIcon={<SVG svg={icons.uiRadioDefault} svgColor='white' width={20} />}
              checkedIcon={<SVG svg={icons.uiRadioActive} svgColor='white' width={20} />}
              style={{color:'white'}} labelStyle={{color:'#FFF'}}  />
            <RadioButton 
              value="claimed" label="Claimed"
              uncheckedIcon={<SVG svg={icons.uiRadioDefault} svgColor='white' width={20} />}
              checkedIcon={<SVG svg={icons.uiRadioActive} svgColor='white' width={20} />}
              style={{color:'white'}} labelStyle={{color:'#FFF'}}  />
            <RadioButton 
              value="fulfilled" label="Fulfilled"
              uncheckedIcon={<SVG svg={icons.uiRadioDefault} svgColor='white' width={20} />}
              checkedIcon={<SVG svg={icons.uiRadioActive} svgColor='white' width={20} />}
              style={{color:'white'}} labelStyle={{color:'#FFF'}}  />
            <RadioButton 
              value="expired" label="Expired"
              uncheckedIcon={<SVG svg={icons.uiRadioDefault} svgColor='white' width={20} />}
              checkedIcon={<SVG svg={icons.uiRadioActive} svgColor='white' width={20} />}
              style={{color:'white'}} labelStyle={{color:'#FFF'}}  />
          </FieldFlex>
        </Flex>
        <Flex w={[1]} mt={10} >
            {/*<FieldSearch name="globalSearch" placeholder="Search Gitcoin: keyword, project, tag" component={ReduxField} type="text"
              bg='turquoise'
              borderRadius={10}
              color='white'
              p={30}
            />*/}
        </Flex>
      </Flex>
      <div>
      </div>
    </FormWrapper>
  )
}

export default FormElements
