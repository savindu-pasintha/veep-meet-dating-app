import React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { CContainer } from '@coreui/react'
import VerticalStepper from 'src/components/stepper/VerticalStepper'

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description: 'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
]
const VeeperFreeDuration = () => {
  return (
    <VerticalStepper
      step1_label="Veeper Free Duration"
      step1={{
        label: { key: 'Current Veeper Duration', value: '8 weeks' },
        insert: { key: 'Inser Duration', value: '' },
        button: { key: 'Submit Duration' },
      }}
      step2={{
        label: { key: 'New Duration', value: '32 weeks' },
        checkBoxLabel: { key: 'Are you sure this new Duration' },
        checkBoxGroup: { yes: '', no: '' },
      }}
      step3={{ button: { key: 'Generate New Duration' }, label: 'Dialog Box asks for password' }}
      step4={[
        'New Duration of 32 weeks has been generated. The New Duration of 32 weeks has been updated.',
        'Sorry the New Duration of 32 weeks has Not been generated. The New Duration of 32 weeks has Not been updated.',
      ]}
    />
  )
}

export default VeeperFreeDuration
