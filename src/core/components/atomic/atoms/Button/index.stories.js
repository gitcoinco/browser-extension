import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Button from '.'

storiesOf('Button', module)
  .add('default', () => (
    <Button>Hello</Button>
  ))
  .add('gradient' , () => (
    <Button gradient='cherry'>Join Now</Button>
  ))
  .add('f[1,2,3]', () => (
    <Button f={[1,2,3]}>Register Account</Button>
  ))
