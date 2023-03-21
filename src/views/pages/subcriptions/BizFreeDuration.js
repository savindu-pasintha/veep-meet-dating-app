import React from 'react'
import VerticalStepper from 'src/components/stepper/VerticalStepper'

const BizFreeDuration = () => {
  return <VerticalStepper step1_label="Biz Free Duration" 
  step1={{
    label: { key: 'Current Veeper Duration', value: '8 weeks' },
    insert: { key: 'Insert Duration', value: '' },
    button: { key: 'Submit Duration' },
  }}
  step2={{
    label: { key: 'New Duration', value: '32 weeks' },
    checkBoxLabel: { key: 'Are you sure this new Duration' },
    checkBoxGroup: { yes: '', no: '' },
  }}
  step3={{ button: { key: 'Generate New Duration' }, label: '' }}
  step4={[
    'New Duration of 32 weeks has been generated. The New Duration of 32 weeks has been updated.',
    'Sorry the New Duration of 32 weeks has Not been generated. The New Duration of 32 weeks has Not been updated.',
  ]}
  />
}

export default BizFreeDuration
