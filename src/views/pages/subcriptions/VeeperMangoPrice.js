import React from 'react'
import VerticalStepper from 'src/components/stepper/VerticalStepper'

const VeeperMangoPrice = () => {
  return <VerticalStepper step1_label="Veeper" 
  step1={{
    label: { key: 'Current Veeper Price', value: '$ 12,34' },
    insert: { key: 'Inser Price', value: '' },
    button: { key: 'Submit' },
  }}
  step2={{
    label: { key: 'New Price', value: '$15,34' },
    checkBoxLabel: { key: 'Are you sure this new Price' },
    checkBoxGroup: { yes: '', no: '' },
  }}
  step3={{ button: { key: 'Generate New Price' }, label: 'Dialog Box asks for password' }}
  step4={[
    'New Price of $12,34 has been generated. The New Price of $12,34 has been updated',
    'Sorry the New Price of $12,34 has Not been generated. The New Price of $12,34 has Not been updated.',
  ]}
  />
}

export default VeeperMangoPrice
