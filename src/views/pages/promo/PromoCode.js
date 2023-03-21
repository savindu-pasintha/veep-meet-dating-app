import React, { useRef ,useEffect} from 'react'
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
import Adidas from '../../../assets/veep-meep/adidas.PNG'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte'

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
const PromoCode = ({ step1_label }) => {
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
        <div className="col-12">
          <div className="d-flex w-1000">
            <select
            onChange={(e)=>{  handleNext()}}
            className="vertical_stepper_input" type="number" placeholder="Insert Price">
              <option>Select Promo Code</option>
              <option>#1</option>
              <option>#2</option>
            </select>

          </div>
        </div>
      </div>
    )
  }

  const Step2 = () => {
    const [selectedValue, setSelectedValue] = React.useState('a')
    const [value, setValue] = React.useState('female')
    const refUpload = useRef(null)
    const handleFileUpload = (event) => {
      console.log(event.target.files[0].name)
    }
    const handleChange = (event) => {
      setSelectedValue(event.target.value)
      if (event.target.value == 'Yes') {
        handleNext()
      }
    }

    const UploadLabel = () => {
      const refUpload = useRef(null)
      const handleFileUpload = (event) => {
        console.log(event.target.files[0].name)
      }

      return (
        <>
          <input
            ref={refUpload}
            accept="image/*"
            onChange={(e) => handleFileUpload(e)}
            type="file"
            style={{ display: 'none' }}
            // multiple={false}
          />
          <label
            className="mx-2 my-0 px-5 py-1 notification_send_upload_button"
            onClick={(e) => refUpload.current.click()}
          >
            + Upload CSV
          </label>
        </>
      )
    }
    return (
      <div className="row">
        <div className="col-12 ">
          <div>
            <Radio style={{ color: 'green' }} />
            <label className="py-2 px-2 text-start notification_item_box">
              Send to All Veepers
            </label>
          </div>

          <div className="my-1">
            <Radio style={{ color: 'green' }} />
            <label className="py-2 px-2 text-start notification_item_box">
              Send to All Businesses
            </label>
          </div>
          <div>
            <Radio style={{ color: 'green' }} />
            <label className="py-2 px-2 text-start notification_item_box">
              Send to Selected Veepers
            </label>
            <UploadLabel />
          </div>
          <div className="my-1">
            <Radio style={{ color: 'green' }} />
            <label className="py-2 px-2 text-start notification_item_box">
              Send to Selected Businesses
            </label>
            <UploadLabel />
          </div>
          <div>
            <Radio style={{ color: 'green' }} />
            <label
              onClick={(e) => handleNext()}
              className="py-2 px-2 text-start  notification_item_box"
            >
              Send to All{' '}
            </label>
          </div>

          <div className="mt-5 mx-5">
            <label className="py-2 px-2 text-start notification_item_box"
             onClick={(e)=>handleNext()}>
              Submit Promo Code for Preview
            </label>
          </div>
        </div>
      </div>
    )
  }

  const Step3 = () => {
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
          <label className="w-100 py-2 font-5">Promo Code Preview</label>
        </div>
        <div className="col-12">
          <label className="pt-3 font-5">Promo Code: </label>
          <label className="w-100 py-1 font-5">
            New Price of $12,34 has been generated. The New Price of $12,34 has been updated. Sorry
            the New Price of $12,34 has Not been generated. The New Price of $12,34 has Not been
            updated.
          </label>
        </div>
        <div className="col-12">
          <label className="pt-3 font-5">Send To: </label>
          <label className="w-100 py-1 font-5">
            New Price of $12,34 has been generated. The New Price of $12,34 has been updated. Sorry
            the New Price of $12,34 has Not been generated. The New Price of $12,34 has Not been
            updated.
          </label>
        </div>
        <div className="col-12 py-3">
          <label className="w-100 vertical_stepper_step1_label">Approve Promo Code </label>
          <FormControl className="w-100 ">
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

  const Step4 = () => {
    const save = (data) => {
      console.log(data)
      handleNext()
    }
    return (
      <div className="row">
        <div className="col-12">
          <div className="d-flex ">
            <button onClick={handleBack} className="mx-2 notification_item_box">
            Send Promo Code
            </button>
            <label className="px-3 py-2 text-center font-5">*Requires Password</label>
          </div>
        </div>
        <div className="col-12">
          <label className="pt-3 font-5">
          Send Promo Code “Insert Notification” has been sent to “Insert Recipients”
          </label>
          <label className="w-100 py-1 font-5">
          Send Promo Code “Insert Notification” has Not been sent to “Insert Recipients” Please try
            again
          </label>
        </div>
      </div>
    )
  }
  useEffect(()=>{},[activeStep])
  return (
    <CContainer>
      <Box>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel optional={index === 2 ? <></> : null} onClick={(e)=>handleOpen(index)} className="cursor">
                Step {index + 1}/{4}
              </StepLabel>
              <StepContent>
                <Box sx={{ mb: 2 }}>
                  {index === 0 ? <Step1 /> : index === 1 ? <Step2 /> : <Step3 />}
                </Box>
              </StepContent>
            </Step>
          ))}
          <Step key={4}>
            <StepLabel optional={4 === 4 ? <></> : null} onClick={(e)=>handleOpen(4)} className="cursor">Step 4/4</StepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>{activeStep === steps.length && <Step4 />}</Box>
            </StepContent>
          </Step>
        </Stepper>
      </Box>
    </CContainer>
  )
}

export default PromoCode
