import React, { useRef } from 'react'
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

const myTheme = createTheme({
  // Set up your custom MUI theme here
})

const NotificationSend = () => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const Step1 = () => {
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
        </div>
      </div>
    )
  }

  const Step2 = () => {
    const refUpload = useRef(null)
    const handleFileUpload = (event) => {
      console.log(event.target.files[0].name)
    }
    const save = (data) => {
      console.log(data)
      handleNext()
    }
    return (
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="py-2">
              <Radio style={{ color: 'green' }} />
              <select className=" my-0 px-5 py-1 notification_send_upload_button">
                <option> Select Notification</option>
              </select>
            </div>
            <div className="pb-2">
              <Radio style={{ color: 'green' }} />
              <label className="py-2 px-2 text-start  notification_item_box">
                Custom Notification{' '}
              </label>
            </div>
            <div className="mx-0 border border-1">
              <ThemeProvider theme={myTheme}>
                <MUIRichTextEditor label="Type..." onSave={save} inlineToolbar={true} />{' '}
              </ThemeProvider>
            </div>
            <div className="my-4 py-5">
              <label
                onClick={(e) => handleNext()}
                className="py-2 px-2 text-center  notification_item_box"
              >
                Submit Notification for Preview
              </label>
            </div>
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
          <label className="w-100 py-2 font-5">Notification Preview</label>
        </div>
        <div className="col-12">
          <label className="pt-3 font-5">Notification: </label>
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
          <label className="w-100 vertical_stepper_step1_label">Approve Notification </label>
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
              Send Notification
            </button>
            <label className="px-3 py-2 text-center font-5">*Requires Password</label>
          </div>
        </div>
        <div className="col-12">
          <label className="pt-3 font-5">
            Notification “Insert Notification” has been sent to “Insert Recipients”
          </label>
          <label className="w-100 py-1 font-5">
            Notification “Insert Notification” has Not been sent to “Insert Recipients” Please try
            again
          </label>
        </div>
      </div>
    )
  }

  return (
    <CContainer>
      <Box>
        <Stepper activeStep={activeStep} orientation="vertical">
          {[0, 1, 2, 3].map((step, index) => (
            <Step key={step.label}>
              <StepLabel optional={index === 2 ? <></> : null}>
                <>
                  Step {index + 1}/{4}
                </>
              </StepLabel>
              <StepContent>
                <Box sx={{ mb: 2 }}>
                  {index === 0 ? (
                    <Step1 />
                  ) : index === 1 ? (
                    <Step2 />
                  ) : index == 2 ? (
                    <Step3 />
                  ) : index == 3 ? (
                    <Step4 />
                  ) : (
                    ''
                  )}
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </CContainer>
  )
}

export default NotificationSend
