import React, { useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import Adidas from '../../../assets/veep-meep/adidas.PNG'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte'

const myTheme = createTheme({
  // Set up your custom MUI theme here
})

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
const ContactUs = ({ step1_label }) => {
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
    const [selectedValue, setSelectedValue] = React.useState('a')
    const [value, setValue] = React.useState('female')

    const handleChange = (event) => {
      setSelectedValue(event.target.value)
      if (event.target.value == 'Yes') {
        handleNext()
      }
    }

    return (
      <div className="row ">
        <div className="col-12">
          <div className="d-flex p-0 m-0">
            <label className=" mx-2 my-2 font-5 contact_us_label_size_step1">Photo</label>
            <FormControl className="">
              <RadioGroup
                row
                className=" w-100"
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

          <div>
            <label className=" mx-2 my-2 font-5 contact_us_label_size_step1">Video</label>
            <FormControl>
              <RadioGroup
                row
                className=" w-100"
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
          <div>
            <label className=" mx-2 my-2 font-5 contact_us_label_size_step1">Text</label>
            <FormControl>
              <RadioGroup
                row
                className=" w-100"
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
          <div>
            <label className="mx-2 my-2 font-5 contact_us_label_size_step1">Link</label>
            <FormControl>
              <RadioGroup
                row
                className=" w-100"
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
      </div>
    )
  }

  const Step2 = () => {
    const refUpload = useRef(null)
    const handleFileUpload = (event) => {
      console.log(event.target.files[0].name)
    }
    return (
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <input
                ref={refUpload}
                accept="image/*"
                onChange={(e) => handleFileUpload(e)}
                type="file"
                style={{ display: 'none' }}
              />
              <div
                className="contact_us_upload_button contact_us_upload_button_size text-center py-5"
                onClick={(e) => refUpload.current.click()}
              >
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <defs>
                    <clipPath id="clip-path">
                      <rect width="16" height="15.999" fill="none" />
                    </clipPath>
                  </defs>
                  <g id="Group_1015" data-name="Group 1015" transform="translate(-168 -273)">
                    <path
                      id="Path_222"
                      data-name="Path 222"
                      d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z"
                      transform="translate(168 273)"
                      fill="#fff"
                    />
                    <g
                      id="_"
                      data-name="+"
                      transform="translate(180 285)"
                      clipPath="url(#clip-path)"
                    >
                      <path
                        id="Union_1"
                        data-name="Union 1"
                        d="M-4613,16V9h-7V7h7V0h2V7h7V9h-7v7Z"
                        transform="translate(4620)"
                        fill="#464545"
                      />
                    </g>
                  </g>
                </svg>
                <br />
                <label>Upload Photo</label>
              </div>
            </div>
            <div className="col-6">
              <div
                className="contact_us_upload_img_size text-center py-5"
                onClick={(e) => handleNext()}
              >
                <img src={Adidas} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const Step3 = () => {
    return (
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <input
                className="vertical_stepper_input"
                type="text"
                placeholder="YouTube Video Link"
              />
            </div>
            <div className="col-6" onClick={(e) => handleNext()}>
              <div className="contact_us_upload_img_size text-center py-5">
                <img src={Adidas} alt="" />
              </div>
            </div>
          </div>
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
      <div className="row border border-1">
        <ThemeProvider theme={myTheme}>
          <MUIRichTextEditor label="Type..." onSave={save} inlineToolbar={true} />{' '}
        </ThemeProvider>
      </div>
    )
  }
  const Step5 = () => (
    <div className="row">
      <div className="col-6">
        <div className="d-flex w-1000">
          <input
            className="vertical_stepper_input"
            type="text"
            placeholder="Link"
            onChange={(e) => handleNext()}
          />
        </div>
      </div>
    </div>
  )

  const Step6 = () => (
    <div className="row">
      <div className="col-6">
        <div className="d-flex ">
          <button onClick={handleNext} className="mx-2 vertical_stepper_submit_button">
            Publish
          </button>
        </div>
      </div>
    </div>
  )
  useEffect(()=>{},[activeStep])
  return (
    <div className='mx-4 p-0'>
      <Box>
        <Stepper activeStep={activeStep} orientation="vertical">
          {[0, 1, 2, 3, 4, 5].map((step, index) => (
            <Step key={index}>
              <StepLabel optional={index === 2 ? <></> : null}  onClick={(e)=>handleOpen(index)}  className="cursor">
                {index != 5 ? (
                  <>
                    Step {index + 1}/{5}
                  </>
                ) : (
                  ''
                )}
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
                  ) : index == 4 ? (
                    <Step5 />
                  ) : (
                    <Step6 />
                  )}
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  )
}

export default ContactUs
