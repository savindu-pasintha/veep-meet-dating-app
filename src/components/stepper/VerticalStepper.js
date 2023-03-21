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
import { useEffect } from 'react'


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
const VerticalStepper = ({ step1_label,step1={},step2={},step3={},step4={} }) => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const handleOpen = (num) => {
    setActiveStep(num)
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const Step1 = () => {
    return (
      <div className="row">
        <div className="col-12 my-2">
          <label className="vertical_stepper_step1_label">
            {step1.label.key} :  {step1.label.value} 
          </label>
        </div>
        <div className="col-12">
          <div className="d-flex w-1000">
            <input className="vertical_stepper_input" type="number" placeholder= {step1.insert.key} />
            <button onClick={handleNext} className="mx-2 vertical_stepper_submit_button">
            {step1.button.key} 
            </button>
          </div>
        </div>
      </div>
    )
  }

  const Step2 = () => {
    const [selectedValue, setSelectedValue] = React.useState('a')
    const [value, setValue] = React.useState('female')

    const handleChange = (event) => {
      setSelectedValue(event.target.value)
      if (event.target.value == 'Yes') {
        handleNext()
      }
    }

    return (
      <div className="row">
        <div className="col-12">
          <label className="vertical_stepper_step2_label">  {step2?.label?.key} :  {step2?.label?.value}  </label>
          <br />
          <label className="vertical_stepper_step1_label">{step2?.checkBoxLabel?.key}</label>
        </div>
        <div className="col-12">
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
            <RadioGroup
              row
              className="d-flex w-100"
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                labelPlacement="end"
                value="Yes"
                control={<Radio style={{ color: 'green' }} />}
                label="Yes"
              />
              <FormControlLabel
                labelPlacement="end"
                value="No"
                control={<Radio style={{ color: 'green' }} />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    )
  }

  const Step3 = () => {
    return (
      <div className="row">
        <div className="col-12">
          <div className="d-flex ">
            <button className="vertical_stepper_submit_button" onClick={handleNext}>
            {step3?.button?.key}
            </button>
            <label className="mx-2 my-auto vertical_stepper_step1_label">
            {step3?.label}
            </label>
          </div>
        </div>
      </div>
    )
  }

  useEffect(()=>{},[activeStep])
  return (
    <div className='mx-4'>
      <Box>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel optional={index === 2 ? <></> : null} onClick={(e)=>handleOpen(index)}  className="cursor">
                Step {index + 1}/{steps.length}
              </StepLabel>
              <StepContent>
                <Box sx={{ mb: 2 }}>
                  {index === 0 ? <Step1 /> : index === 1 ? <Step2 /> : <Step3 />}
                </Box>
              </StepContent>
            </Step>
          ))}
          <Step key={4}>
            <StepLabel optional={''} onClick={(e)=>handleOpen(3)}  className="cursor"></StepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>
                {activeStep === steps.length && (
                  <>
                    {step4.map((item) => item &&  (
                      <div className="row">
                        <label className="w-100 ">{item}</label>
                      </div>
                    ))}
                  </>
                )}
              </Box>
            </StepContent>
          </Step>
        </Stepper>
      </Box>
    </div>
  )
}

export default VerticalStepper
